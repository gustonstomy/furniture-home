import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

type Category = {
  name: string;
  count: number;
};

type RecentPost = {
  title: string;
  date: string;
  image: string;
};

type Post = RecentPost & {
  description: string;
};

export default function BlogPost() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories: Category[] = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 },
  ];

  const recentPost: RecentPost[] = [
    {
      title: "Going all-in with millennial design",
      date: "14 Oct 2022",
      image: "/images/post1.svg",
    },
    {
      title: "Exploring new ways of decorating ",
      date: "14 Oct 2022",
      image: "/images/post2.svg",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      image: "/images/post3.svg",
    },
    {
      title: "Colorful office redesign",
      date: "14 Oct 2022",
      image: "/images/post4.svg",
    },
    {
      title: "Modern home in Milan",
      date: "14 Oct 2022",
      image: "/images/post5.svg",
    },
  ];
  const post: Post[] = [
    {
      title: "Executive Summary",
      date: "14 Oct 2022",
      image: "/images/laptop.svg",
      description:
        "This document appears to be displaying an executive summary on a laptop screen. The laptop is placed on a wooden surface along with a notepad, blue pen, glass of water, smartphone, and some decorative plants. The working environment showcases a minimalist and organized workspace, ideal for productivity and creative thinking.",
    },
    {
      title: "Exploring new ways of decorating",
      date: "14 Oct 2022",
      image: "/images/Rectangle68.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    },
    {
      title: "Handmade pieces that took time to make",
      date: "14 Oct 2022",
      image: "/images/Rectangle67.svg",
      description:
        "This document appears to be displaying an executive summary on a laptop screen. The laptop is placed on a wooden surface along with a notepad, blue pen, glass of water, smartphone, and some decorative plants. The working environment showcases a minimalist and organized workspace, ideal for productivity and creative thinking.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-8 xl:gap-24">
        {/* Main Content - Blog Post */}
        <div className="md:col-span-2 space-y-16">
          {post.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden ">
              <Image
                width={800}
                height={500}
                src={item.image}
                alt={item.title}
                className="w-full h-auto"
              />

              <div className="flex items-center text-gray-500 text-sm mt-3 space-x-4">
                <div className="flex items-center">
                  <span className="mr-2">
                    <Image
                      src="/icons/dashicons_admin-users.svg"
                      alt="User Icon"
                      width={16}
                      height={16}
                      className="h-5 w-5"
                    />
                  </span>
                  <span>Admin</span>
                </div>

                <div className="flex items-center">
                  <span className="mr-2">
                    <Image
                      src="/icons/uis_calender.svg"
                      alt="User Icon"
                      width={16}
                      height={16}
                      className="h-5 w-5"
                    />
                  </span>
                  <span>14 Oct 2022</span>
                </div>

                <div className="flex items-center">
                  <span className="mr-2">
                    <Image
                      src="/icons/ci_tag.svg"
                      alt="User Icon"
                      width={16}
                      height={16}
                      className="h-5 w-5"
                    />
                  </span>
                  <span>Wood</span>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
              <button className="text-black text-[16px] border-b-2 border-black mt-4 py-2 cursor-pointer hover:border-2 hover:px-2 hover:rounded-xl">
                Read more
              </button>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-[10px] py-4 px-4 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute right-3 ">
              <Search size={20} className="text-gray-400" />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className="flex justify-between items-center py-4 border-gray-100"
                >
                  <span className="text-gray-600 hover:text-gray-900 cursor-pointer">
                    {category.name}
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-sm">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Posts</h2>
            <div className="space-y-8 ">
              {recentPost.map((post) => (
                <div key={post.title} className="cursor-pointer">
                  <div className="flex gap-2 items-center ">
                    <div className="rounded-xl h-18 w-18 bg-black flex-shrink-0">
                      <Image
                        alt={post.title}
                        src={post.image}
                        height={50}
                        width={50}
                        className="h-18 w-18 object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <p className="text-[14px] text-black flex-wrap pr-8">
                        {post.title}
                      </p>
                      <p className="text-[12px] text-[#9F9F9F]">{post.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
