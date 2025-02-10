'use client';

import { useState } from 'react';
import Layout from '@/app/layout';
import Image from 'next/image';

const Baidu = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Layout>
      <div className="flex flex-col p-4">
        <div className="flex flex-col items-center">
          <Image
            src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
            alt="Baidu logo"
            width={270}
            height={129}
            className=""
          />
          <div className="flex flex-col md:flex-row items-center p-4 mt-2 bg-white dark:bg-black rounded-lg shadow-md w-full md:w-auto">
            <div className="flex bg-white dark:bg-gray-800 rounded-l-md border-t-2 border-b-2 border-l-2 border-gray-300 dark:border-gray-600 w-full md:w-[546px]">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="香港特首欢迎恢复一签多行"
                className="rounded-l-md p-2 flex-grow focus:outline-none text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 ml-2"
              />
              <div className="flex items-center ml-auto">
                <Image
                  src="/baidu/audio.png"
                  alt="Baidu audio"
                  width={24}
                  height={20}
                  className="w-6 h-6 mr-3"
                />
                <Image
                  src="/baidu/image.png"
                  alt="Baidu image"
                  width={24}
                  height={20}
                  className="w-6 h-6 mr-3"
                />
              </div>
            </div>
            <button
              onClick={() => alert('Search not implemented')}
              className="rounded-r-md border-2 border-baidu-blue dark:border-baidu-blue bg-baidu-blue dark:bg-baidu-blue text-white h-11 w-full md:w-24 mt-2 md:mt-0"
            >
              百度一下
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-row mr-[460px]">
            <a
              href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry"
              className="flex flex-row text-blue-700 underline"
            >
              <p className="text-gray-800 dark:text-white">百度热搜</p>
              <i className="c-icon arrow">{'>'}</i>
            </a>
          </div>
          <div className="flex flex-row">
            <a className="flex flex-row">
              <p className="mr-1">🔃</p>
              <span className="text-gray-800 dark:text-white">换一换</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 justify-center space-y-4 md:space-y-0 md:space-x-8">
          <ul className="space-y-2 mr-14">
            <li className="flex justify-between text-gray-600">
              <span>🔝 中国更希望百花齐放</span>
              <span className="text-red-500">热</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>1. 外交部回应优化农库不用新疆棉</span>
              <span className="text-orange-500">热</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>2. 浙江45岁胸外科主任在术中逝世</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>3. 小微企业经营环境持续改善</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>4. 访台清华校友台媒炒作：神仙姊妹</span>
            </li>
          </ul>

          <ul className="space-y-2">
            <li className="flex justify-between text-gray-600">
              <span>5. 中国人要盯上美国人汉堡了</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>6. 储户取款5000元被要求证明夫妻关系</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>7. 《我是刑警》打码太影响观感了</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>8. 安以轩得知老公被判13年后很伤心</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>9. 俄罗斯一州遭大规模空袭</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Baidu;
