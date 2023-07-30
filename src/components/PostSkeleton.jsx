import React from "react";
import img from "../image/logo_wobg.png"
import Sidebar from "./sidebar/Sidebar";

export default function PostSkeleton() {
  return (
    <div className="flex flex-wrap mx-auto py-4 bg-[#dedede]">
      <div role="status" class="max-w-2xl bg-white mx-24 rounded-lg shadow-lg w-2/3 border  border-gray-200  animate-pulse  mb-4 dark:border-gray-700">
        <div class="flex items-center justify-center h-80 mb-12  bg-gray-300 rounded dark:y-700bg-gra">
          <img className="w-32 animate-bounce opacity-50" src={img} alt="" />
        </div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-lg mb-4"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-lg mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        
      </div>
      <Sidebar className="" />
    </div>
  );
}
