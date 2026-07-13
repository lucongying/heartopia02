# Compress all JPG images in the heartopia project using .NET System.Drawing
Add-Type -AssemblyName System.Drawing

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$targetDirs = @(
    "$scriptDir\images\screenshots",
    "$scriptDir\guide\images\tutorials"
)

$maxWidth = 1200
$jpgQuality = 80  # 0-100, 80 is good balance

# JPEG encoder quality param
$encoderParams = [System.Drawing.Imaging.EncoderParameters]::new(1)
$encoderParam = [System.Drawing.Imaging.EncoderParameter]::new(
    [System.Drawing.Imaging.Encoder]::Quality,
    $jpgQuality
)
$encoderParams.Param[0] = $encoderParam

# Get JPEG codec
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

$totalOriginal = 0
$totalNew = 0
$count = 0

foreach ($dir in $targetDirs) {
    if (-not (Test-Path $dir)) { continue }
    $files = Get-ChildItem -Path $dir -Filter *.jpg
    foreach ($file in $files) {
        $originalSize = $file.Length
        $totalOriginal += $originalSize

        try {
            $img = [System.Drawing.Image]::FromFile($file.FullName)
            $w = $img.Width
            $h = $img.Height

            # Resize if width > maxWidth
            if ($w -gt $maxWidth) {
                $ratio = $maxWidth / $w
                $newW = [int]($w * $ratio)
                $newH = [int]($h * $ratio)

                $bmp = [System.Drawing.Bitmap]::new($newW, $newH)
                $bmp.SetResolution($img.HorizontalResolution, $img.VerticalResolution)
                $g = [System.Drawing.Graphics]::FromImage($bmp)
                $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
                $g.DrawImage($img, 0, 0, $newW, $newH)
                $g.Dispose()
                $img.Dispose()

                # Save to temp file, then replace original
                $tempFile = $file.FullName + ".tmp"
                $bmp.Save($tempFile, $jpegCodec, $encoderParams)
                $bmp.Dispose()

                Remove-Item $file.FullName -Force
                Move-Item $tempFile $file.FullName -Force
            } else {
                # Just recompress with quality setting
                $img.Dispose()

                # For smaller images, just re-save with quality
                $bmp2 = [System.Drawing.Bitmap]::FromFile($file.FullName)
                $tempFile = $file.FullName + ".tmp"
                $bmp2.Save($tempFile, $jpegCodec, $encoderParams)
                $bmp2.Dispose()

                Remove-Item $file.FullName -Force
                Move-Item $tempFile $file.FullName -Force
            }

            $newSize = (Get-Item $file.FullName).Length
            $totalNew += $newSize
            $count++

            $reduction = [math]::Round(($originalSize - $newSize) / $originalSize * 100, 1)
            Write-Host ("✓ {0}: {1}x{2} → {3}x{4}, {5}KB → {6}KB ({7}% reduced)" -f
                $file.Name, $w, $h,
                (if ($w -gt $maxWidth) { [int]($w * $ratio) } else { $w }),
                (if ($w -gt $maxWidth) { [int]($h * $ratio) } else { $h }),
                [math]::Round($originalSize/1KB, 1),
                [math]::Round($newSize/1KB, 1),
                $reduction
            )
        } catch {
            Write-Host ("✗ {0}: {1}" -f $file.Name, $_.Exception.Message) -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host ("=== Done: {0} images compressed ===" -f $count) -ForegroundColor Green
Write-Host ("Original total: {0}KB ({1}MB)" -f [math]::Round($totalOriginal/1KB, 1), [math]::Round($totalOriginal/1MB, 2))
Write-Host ("New total:      {0}KB ({1}MB)" -f [math]::Round($totalNew/1KB, 1), [math]::Round($totalNew/1MB, 2))
Write-Host ("Saved:          {0}KB ({1}MB, {2}%)" -f
    [math]::Round(($totalOriginal - $totalNew)/1KB, 1),
    [math]::Round(($totalOriginal - $totalNew)/1MB, 2),
    [math]::Round(($totalOriginal - $totalNew) / $totalOriginal * 100, 1)
)
