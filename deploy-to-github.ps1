# Deploy BeautySalon ke GitHub
# Jalankan: .\deploy-to-github.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# 1. Pastikan remote benar
$expectedRemote = "https://github.com/azaahmad377/Beautysalon.git"
$currentRemote = (git remote get-url origin 2>$null)
if ($currentRemote -ne $expectedRemote) {
    git remote set-url origin $expectedRemote
    Write-Host "Remote diset ke: $expectedRemote" -ForegroundColor Green
}

# 2. Buka browser untuk buat repo (kalau belum)
$newRepoUrl = "https://github.com/new?name=Beautysalon&description=BeautySalon+website+template"
Write-Host "`nMembuka halaman buat repo GitHub..." -ForegroundColor Cyan
Start-Process $newRepoUrl

Write-Host @"

  Buat repo dengan nama: Beautysalon
  Jangan centang 'Add a README' – langsung klik Create repository.

  Setelah repo jadi, tekan Enter di sini untuk push code.

"@ -ForegroundColor Yellow
Read-Host "Tekan Enter setelah repo dibuat"

# 3. Push ke GitHub
Write-Host "Push ke GitHub..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "`nBerhasil! Situs akan live di:" -ForegroundColor Green
    Write-Host "  https://azaahmad377.github.io/Beautysalon/" -ForegroundColor White
    Write-Host "`nAktifkan GitHub Pages: Repo -> Settings -> Pages -> Source: GitHub Actions" -ForegroundColor Yellow
} else {
    Write-Host "`nPush gagal. Cek: repo sudah dibuat dan nama persis 'Beautysalon'." -ForegroundColor Red
}
