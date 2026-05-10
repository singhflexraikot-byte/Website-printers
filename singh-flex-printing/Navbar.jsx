export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-yellow-400">
        Singh Flex Printing
      </h1>
      <div className="space-x-4">
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
