export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>© {new Date().getFullYear()} Your Agency. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-3">
        <a href="#" className="hover:text-white">Facebook</a>
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">LinkedIn</a>
      </div>
    </footer>
  );
}
