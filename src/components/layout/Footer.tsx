export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} RadauApp. Alle Rechte vorbehalten.</p>
        <p className="text-sm mt-2">Weil gute Musik nachhaltiger sein kann.</p>
      </div>
    </footer>
  );
}
