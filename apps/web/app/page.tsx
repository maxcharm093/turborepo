import { Input } from "@repo/ui/input";

const Page = () => {
  return (
    <div className="w-full min-h-dvh flex justify-center items-center">
      <span className="text-xl font-semibold font-serif">
        Hello, this is the page!
      </span>
      <Input />
    </div>
  );
};

export default Page;
