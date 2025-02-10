'use client';

import PageLayout from '@/app/components/page_layout';
import Image from 'next/image';

const Github404 = () => {
  return (
    <PageLayout fullWidth>
      <div className="relative flex flex-col w-full h-screen">
        <div className="absolute inset-0 w-[100%] h-[425px] z-0">
          <Image
            src="/github/bg.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="relative flex justify-center items-center w-full h-full z-10">
          <div className="relative w-[940px] h-[103%]">
            <Image
              src="/github/error_text.png"
              alt="404 “This is not the web page you are looking for”"
              width={271}
              height={249}
              className="absolute top-[72px] left-[72px] z-[10]"
            />
            <Image
              src="/github/octocat.png"
              alt=""
              width={188}
              height={230}
              className="absolute top-[94px] left-[356px] z-[9]"
            />
            <Image
              src="/github/speeder.png"
              alt=""
              width={440}
              height={156}
              className="absolute top-[150px] left-[432px] z-[8]"
            />
            <Image
              src="/github/octocatshadow.png"
              alt=""
              width={166}
              height={49}
              className="absolute top-[297px] left-[371px] z-[7]"
            />
            <Image
              src="/github/speedershadow.png"
              alt=""
              width={430}
              height={75}
              className="absolute top-[263px] left-[442px] z-[6]"
            />
            <Image
              src="/github/building_1.png"
              alt=""
              width={304}
              height={123}
              className="absolute top-[73px] left-[467px] z-[5]"
            />
            <Image
              src="/github/building_2.png"
              alt=""
              width={116}
              height={50}
              className="absolute top-[113px] left-[762px] z-[4]"
            />
          </div>
        </div>
        <div className="absolute top-[450px] left-1/2 transform -translate-x-1/2 w-[800px] text-center">
          <form action="https://github.com/search" method="get" className="block text-left">
            <label className="font-extralight p-[5px]">
              Find code, projects, and people on GitHub:
            </label>
            <input
              type="text"
              name="q"
              className="h-9 text-lg w-[705px] border rounded-sm shadow-sm border-github-gray-1"
            ></input>
            <input
              type="submit"
              value="Search"
              className="h-10 w-[90px] text-sm mt-auto ml-1 mb-auto text-black font-bold bg-github-gray-2 border rounded-sm shadow-sm border-github-gray-1"
            ></input>
          </form>
          <div className="mt-8 text-github-gray-0">
            <a
              href="https://support.github.com/?tags=dotcom-404"
              className="text-github-gray-3 font-extralight	text-sm	mt-0 mr-2.5"
            >
              Contact support
            </a>
            -
            <a
              href="https://githubstatus.com/"
              className="text-github-gray-3 font-extralight	text-sm	mt-0 mr-2.5"
            >
              GitHub Status
            </a>
            -
            <a
              href="https://twitter.com/githubstatus"
              className="text-github-gray-3 font-extralight	text-sm	mt-0 mr-2.5"
            >
              @githubstatus
            </a>
          </div>
          <a href="https://github.com" className="none mt-[35px] md:inline-block">
            <Image src="/github/logo.png" alt="" height={32} width={32}></Image>
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default Github404;
