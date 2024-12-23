"use client";

import React, { useState, useRef } from 'react';

import Test from "./Bookstore";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className=" grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

          <Test />
          </div>
    </QueryClientProvider>
  );
}
