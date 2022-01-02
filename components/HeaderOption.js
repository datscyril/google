function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-300 pb-3 cursor-pointer ${
        selected && 'border-blue-300 text-blue-300'
      }`}
    >
      <Icon className="h-6 w-6" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default HeaderOption;
