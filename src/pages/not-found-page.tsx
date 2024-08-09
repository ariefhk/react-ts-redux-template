import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface NotFoundPageProps {
  isLogged?: boolean
}

export default function NotFoundPage({
  isLogged,
}: Readonly<NotFoundPageProps>) {
  const navigate = useNavigate()

  return (
    <div className="h-svh font-inter">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Ups! Halaman Tidak Ditemukan!</span>
        <p className="text-center text-muted-foreground">
          Kelihatannya halaman yang kamu cari tidak Ada <br />
          Atau sudah dihapus deh.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Kembali
          </Button>
          {isLogged ? (
            <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
          ) : (
            <Button onClick={() => navigate("/login")}>Kembali ke Login</Button>
          )}
        </div>
      </div>
    </div>
  )
}
