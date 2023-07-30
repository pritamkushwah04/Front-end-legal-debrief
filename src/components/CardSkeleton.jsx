import React from "react";
import img from "../image/logo_wobg.png"


export default function CardSkeleton() {
  return (
    <div role="status" class="w-72  border border-gray-200 rounded shadow animate-pulse mx-2 mb-4 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:y-700bg-gra">
        <img className= "w-32 animate-bounce opacity-50" src={img} alt="" />
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24  mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    </div>
  );
}
