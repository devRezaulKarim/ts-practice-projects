interface AppTitleProps {
  title: string;
}

const AppTitle = ({ title }: AppTitleProps) => {
  return (
    <h1 className="text-lg sm:text-xl md:text-2xl text-center text-gray-700 font-semibold mb-8 underline-offset-4 underline capitalize">
      {title}
    </h1>
  );
};

export default AppTitle;
