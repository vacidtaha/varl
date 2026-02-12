export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} VarlNet. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
