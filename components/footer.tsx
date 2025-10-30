export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted">© {currentYear} Aloka Sankalpana. All rights reserved.</p>
      </div>
    </footer>
  )
}
