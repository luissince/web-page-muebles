'use client'
import { Dialog } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "../../lib/data";
import { usePathname } from "next/navigation";
import { LogoOftalmogia2 } from "../../lib/images";
import styles from './header.module.css'

export default function Header() {

    return (
        <header className="header-section-wrapper relative">
            <div className="w-full bg-white h-10 border-b border-qgray-border">
                <div className="container max-w-screen-x mx-auto md:px-6 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="">
                            <ul className="flex space-x-6">
                                <li>
                                    <span className={`text-xs leading-6 text-qblack font-medium`}>Account</span>
                                </li>
                                <li>
                                    <span className="text-xs leading-6 text-qblack font-medium">Track Order</span>
                                </li>
                                <li>
                                    <span className="text-xs leading-6 text-qblack font-medium">Support</span>
                                </li>
                            </ul>
                        </div>

                        <div className="topbar-dropdowns sm:block hidden">
                            <div className="flex space-x-6">
                                <div className="country-select flex space-x-1 items-center">
                                    <div>
                                        <Image src="/assets/country-logo-16x16.png" width={16} height={16} alt="country logo" className="overflow-hidden rounded-full" />
                                    </div>
                                    <div className="my-select-box w-fit">
                                        <button type="button" className="my-select-box-btn">
                                            <span>United State</span>
                                        </button>
                                        {/* <div className="my-select-box-section text-xs">
                                            <ul className="list">
                                                <li className="selected">United State</li>
                                                <li className="">Bangladesh</li>
                                                <li className="">India</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <div>
                                        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current qblack" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                                            <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                                        </svg>
                                    </div>
                                </div>
                                <div className="currency-select flex space-x-1 items-center">
                                    <div className="my-select-box w-fit">
                                        <button type="button" className="my-select-box-btn text-xs"><span>USD</span>
                                        </button>
                                        {/* <div className="my-select-box-section ">
                                            <ul className="list text-xs">
                                                <li className="selected">USD</li>
                                                <li className="">BDT</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current qblack" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                                        <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                                    </svg>
                                </div>
                                <div className="language-select flex space-x-1 items-center">
                                    <div className="my-select-box w-fit">
                                        <button type="button" className="my-select-box-btn text-xs">
                                            <span>Bangla</span>
                                        </button>
                                        {/* <div className="my-select-box-section ">
                                            <ul className="list text-xs">
                                                <li className="selected">Bangla</li>
                                                <li className="">english</li>
                                            </ul>
                                        </div> */}
                                    </div>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current qblack" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)">
                                        </rect>
                                        <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[86px] bg-white lg:block hidden">
                <div className="container max-w-screen-x mx-auto md:px-6 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="cursor-pointer">
                            <Image width="152" height="36" src="/assets/logo.svg" alt="logo" />
                        </div>

                        <div className="w-[517px] h-[44px]">
                            <div className="w-full h-full flex items-center  border border-qgray-border bg-white search-com">
                                <div className="flex-1 bg-white h-full">
                                    <form action="#" className="h-full">
                                        <input type="text" className="search-input" placeholder="Search Product..." />
                                            {/* <input
                                            type="text"
                                            className="block w-full h-full flex-1 text-xs border-0 outline-0 bg-transparent pl-2 placeholder:text-gray-500  leading-4"
                                            placeholder="Search Product..." /> */}
                                    </form>
                                </div>
                                <div className="w-[1px] h-[22px] bg-qgray-border"></div>
                                <div className="flex-1 flex items-center px-4">
                                    <button type="button" className="w-full text-xs font-medium text-qgray flex justify-between items-center">
                                        <span className="text-gray-500 ">All Categories</span>
                                        <span>
                                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)" fill="#8E8E8E">
                                                </rect>
                                                <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)" fill="#8E8E8E">
                                                </rect>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <button className="w-[93px] h-full text-sm font-semibold bg-search-btn" type="button">Search</button>
                            </div>
                        </div>

                        <div className="flex space-x-6 items-center">
                            <div className=" relative">
                                <Link rel="noopener noreferrer" href="/products-compaire">
                                    <span>
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.33556 0.70842C8.33556 1.09592 8.32306 1.41675 8.31056 1.41675C8.29806 1.41675 8.09389 1.45425 7.86473 1.50425C3.90639 2.30425 0.952225 5.43342 0.402225 9.40843C0.273058 10.3168 0.327225 11.7001 0.523058 12.6251C1.01889 14.9918 2.55639 17.2126 4.58973 18.5126L4.82722 18.6626L5.41472 18.2209C5.73556 17.9793 6.00222 17.7709 6.00222 17.7543C6.00222 17.7418 5.89806 17.6751 5.77306 17.6084C5.13556 17.2751 4.30639 16.6084 3.74389 15.9793C2.67722 14.7834 1.99389 13.3251 1.77306 11.7918C1.69389 11.2251 1.69389 10.1001 1.77306 9.56259C1.94389 8.42509 2.34389 7.35009 2.94389 6.40842C3.69389 5.23759 4.83556 4.21259 6.08556 3.58342C6.71889 3.26676 7.59806 2.96675 8.20223 2.85842L8.33556 2.83342V3.41675C8.33556 3.73759 8.34389 4.00009 8.35639 4.00009C8.39806 4.00009 11.0022 2.02925 11.0022 2.00009C11.0022 1.97092 8.39806 8.58307e-05 8.35639 8.58307e-05C8.34389 8.58307e-05 8.33556 0.316753 8.33556 0.70842Z" fill="black"></path>
                                            <path d="M13.9234 3.11266C13.6026 3.35432 13.3443 3.56682 13.3568 3.58349C13.3693 3.60432 13.4943 3.68349 13.6401 3.76266C14.8609 4.45432 15.9984 5.62099 16.7026 6.91683C17.1276 7.69599 17.4859 8.82933 17.5859 9.71266C17.6693 10.4085 17.6193 11.6043 17.4859 12.2377C16.9109 14.9627 15.0151 17.1585 12.3984 18.1335C12.0693 18.2543 11.1776 18.5002 11.0609 18.5002C11.0151 18.5002 11.0026 18.396 11.0026 17.9168C11.0026 17.596 10.9943 17.3335 10.9818 17.3335C10.9401 17.3335 8.33594 19.3043 8.33594 19.3335C8.33594 19.3627 10.9401 21.3335 10.9818 21.3335C10.9943 21.3335 11.0026 21.0168 11.0026 20.6252V19.921L11.1609 19.896C11.5484 19.8335 12.6443 19.5377 13.0026 19.396C16.2526 18.1252 18.4776 15.3085 18.9401 11.8752C19.0609 10.9918 19.0068 9.60849 18.8151 8.70849C18.3193 6.34183 16.7818 4.12099 14.7484 2.82099L14.5109 2.67099L13.9234 3.11266Z" fill="black"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">2</span>
                            </div>
                            <div className=" relative">
                                <Link rel="noopener noreferrer" href="/products-compaire">
                                    <span>
                                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.97214 0.0251923C3.71435 0.183434 2.6616 0.701674 1.7705 1.60365C0.970091 2.41068 0.489057 3.26519 0.213053 4.37683C-0.275867 6.30342 0.0789948 8.20232 1.25398 9.98649C2.00708 11.1298 2.98097 12.1781 4.76711 13.7764C5.90266 14.7931 9.36848 17.7601 9.53802 17.859C9.69574 17.954 9.75488 17.9658 10.09 17.9658C10.4252 17.9658 10.4843 17.954 10.642 17.859C10.8116 17.7601 14.2853 14.7891 15.413 13.7764C17.207 12.1702 18.173 11.1258 18.9261 9.98649C20.1011 8.20232 20.4559 6.30342 19.967 4.37683C19.691 3.26519 19.21 2.41068 18.4096 1.60365C17.6131 0.800575 16.7614 0.337719 15.6456 0.100357C15.0857 -0.0183239 14.0526 -0.0301933 13.5637 0.0805759C12.1995 0.377279 11.1546 1.06167 10.2004 2.28013L10.09 2.41859L9.98357 2.28013C9.04122 1.08541 8.01212 0.401016 6.69913 0.100357C6.30878 0.00936699 5.4098 -0.0301933 4.97214 0.0251923ZM6.28907 1.23178C7.40885 1.42958 8.37487 2.07837 9.13979 3.15046C9.26991 3.3364 9.43156 3.55793 9.49465 3.64892C9.78643 4.06035 10.3936 4.06035 10.6854 3.64892C10.7485 3.55793 10.9102 3.3364 11.0403 3.15046C12.0851 1.68673 13.5401 0.998377 15.1251 1.21596C16.8837 1.45728 18.2558 2.69156 18.7802 4.50738C19.1942 5.94342 19.0128 7.45067 18.2597 8.80759C17.6289 9.94298 16.5761 11.1337 14.7427 12.7834C13.8555 13.5786 10.1255 16.7988 10.09 16.7988C10.0506 16.7988 6.33638 13.5904 5.4374 12.7834C2.61823 10.2476 1.50633 8.66518 1.23821 6.8098C1.06472 5.61112 1.31312 4.32145 1.91639 3.30475C2.82326 1.77376 4.58968 0.935081 6.28907 1.23178Z" fill="black"></path>
                                        </svg>
                                    </span>
                                </Link>
                                <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">1</span>
                            </div>
                            <div className="cart-wrapper group relative py-4">
                                <div className="cart relative cursor-pointer">
                                    <a rel="noopener noreferrer" href="/cart">
                                        <span>
                                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z" fill="black">
                                                </path>
                                            </svg>
                                        </span>
                                    </a>
                                    <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">15</span>
                                </div>
                            </div>
                            <div>
                                <Link rel="noopener noreferrer" href="/profile#dashboard">
                                    <span>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.992 19.729C19.9004 18.043 19.438 16.4886 18.617 15.1176C17.6046 13.4237 16.2096 12.1244 14.4679 11.2475C14.0773 11.0522 13.878 10.9645 13.3878 10.7772L12.9334 10.6138L13.4954 10.1833C14.5476 9.38621 15.3408 8.08689 15.6118 6.70387C15.6955 6.28936 15.7035 5.22918 15.6317 4.78278C15.4643 3.77043 14.9582 2.70227 14.2766 1.92507C13.4356 0.976485 12.2439 0.30291 11.0084 0.079713C10.7971 0.0398565 10.1515 0 9.75289 0C9.60542 0 9.55361 0.00398565 9.53766 0.0079713H9.53368C9.49781 0.011957 9.42607 0.0239139 9.33838 0.0358709H9.32642C9.25468 0.0438422 9.17896 0.0557991 9.10323 0.0677561C8.1666 0.195297 7.01873 0.73336 6.25349 1.41092C5.27302 2.27581 4.59147 3.50339 4.38023 4.78278C4.3045 5.22918 4.31646 6.28936 4.40016 6.70387C4.67118 8.08689 5.46433 9.38621 6.51654 10.1833L7.07852 10.6138L6.62415 10.7772C6.13392 10.9645 5.93464 11.0522 5.54404 11.2475C3.80231 12.1244 2.40335 13.4237 1.39498 15.1176C0.569948 16.4926 0.107613 18.043 0.0159426 19.729L0 20H0.255082H1.1957H18.8123H19.4938H20.008L19.992 19.729ZM5.56397 4.98605C5.73934 3.92188 6.28537 2.95735 7.10642 2.25986C7.91949 1.57035 8.94779 1.19171 10 1.19171C10.2352 1.19171 10.4743 1.21164 10.7094 1.24751C13.1606 1.64607 14.8386 3.95775 14.444 6.39299C14.2686 7.45715 13.7226 8.42168 12.9016 9.11917C12.0885 9.80869 11.0602 10.1873 10.008 10.1873C9.77282 10.1873 9.53368 10.1674 9.29852 10.1315C6.84735 9.72898 5.16939 7.42128 5.56397 4.98605ZM2.54285 15.5281C3.73057 13.7146 5.31287 12.4751 7.25389 11.8414C8.17059 11.5424 9.09526 11.391 10.004 11.391C10.9127 11.391 11.8374 11.5424 12.7541 11.8414C14.6951 12.4751 16.2814 13.7146 17.4651 15.5281C18.047 16.4169 18.5134 17.6963 18.7086 18.8721H1.29932C1.49462 17.6963 1.96094 16.4169 2.54285 15.5281Z" fill="black">
                                            </path>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden block w-full h-[60px] bg-white">
                <div className="w-full h-full flex justify-between items-center px-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7"></path>
                        </svg>
                    </div>
                    <div>
                        <Image width="152" height="36" src="/assets/logo.svg" alt="logo" />
                    </div>
                    <div className="relative cursor-pointer">
                        <Link rel="noopener noreferrer" href="/cart">
                            <span>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z" fill="black"></path>
                                </svg>
                            </span>
                        </Link>
                        <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow text-qblack">15</span>
                    </div>
                </div>
            </div>

            <div className="w-full  h-[60px] relative z-30 bg-qyellow lg:block hidden">
                <div className="container max-w-screen-x mx-auto md:px-6 h-full">
                    <div className="w-full h-full relative">
                        <div className="w-full h-full flex justify-between items-center">
                            <div className="flex xl:space-x-7 space-x-3 items-center">
                                <div className="w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                                    <button type="button" className="w-full h-full flex justify-between items-center">
                                        <div className="flex space-x-3 items-center">
                                            <span>
                                                <svg className="fill-current" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="14" height="1"></rect><rect y="8" width="14" height="1"></rect><rect y="4" width="10" height="1"></rect>
                                                </svg>
                                            </span>
                                            <span className="text-sm font-semibold">All Categories</span>
                                        </div>
                                        <div>
                                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                                                <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                                            </svg>
                                        </div>
                                    </button>
                                </div>

                                <div className="nav">
                                    <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                                        <li className="relative">
                                            <span className="flex items-center text-sm font-semibold cursor-pointer">
                                                <span>Homepage</span>
                                                <span className="ml-1.5 ">
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg"
                                                    ><rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                                                        <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                                                    </svg>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="flex items-center text-sm font-semibold cursor-pointer">
                                                <span>Shop</span>
                                                <span className="ml-1.5 ">
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                                                        <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                                                    </svg>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="flex items-center text-sm font-semibold cursor-pointer">
                                                <span>Pages</span>
                                                <span className="ml-1.5 ">
                                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564" transform="rotate(135 9.18359 0.90918)"></rect>
                                                        <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)"></rect>
                                                    </svg>
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="flex items-center text-sm font-semibold cursor-pointer">
                                                <span>About</span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="flex items-center text-sm font-semibold cursor-pointer">
                                                <span>Blog</span>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="flex items-center text-sm font-semibold cursor-pointer">
                                                <span>Contact</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="">
                                <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                                    <div className="flex space-x-2 items-center">
                                        <span className="text-sm font-semibold">Become a Seller</span>
                                        <span>
                                            <svg className="fill-current" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1.08984" width="6.94106" height="1.54246" transform="rotate(45 1.08984 0)" fill="white"></rect><rect x="6" y="4.9082" width="6.94106" height="1.54246" transform="rotate(135 6 4.9082)" fill="white"></rect>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </header>
    );
}

function _Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    return (
        <div className={`fixed z-20 w-full bg-white/100`}>
            <div className="container max-w-screen-2xl mx-auto ss:px-12 px-6">
                <div className="flex py-6 justify-between items-center">
                    <Link href="/">
                        <Image src={LogoOftalmogia2} alt="hoobank" className="w-[170px] cursor-pointer" width={170} height={170} />
                    </Link>

                    <ul className="list-none lg:flex hidden justify-end items-center flex-1">
                        {navigation.map((nav, index) => (
                            <li
                                key={nav.name}
                                className={`cursor-pointer  text-base  hover:border-b-guindaClaro py-2 border-2 border-transparent text-black/100
                                ${pathname === nav.href ? ` border-b-guindaClaro` : ''} `}
                            >
                                <Link href={nav.href} className="flex items-center justify-center">
                                    <ChevronDownIcon className="w-3  text-transparent " /> {nav.name} <ChevronDownIcon className="w-3 text-transparent" />
                                </Link>
                            </li>
                        ))}
                        <div className="order-3 mt-2 sm:order-2 sm:mt-0 sm:w-auto">
                            <a href="#" className="flex items-center justify-center text-base  border border-transparent bg-guindaClaro px-5 py-2 text-white hover:bg-guindaOscuro">
                                <MagnifyingGlassIcon className="w-5 mr-1" /> Buscar
                            </a>
                        </div>
                    </ul>

                    <div className="lg:hidden">
                        <button
                            type="button"
                            className={`flex items-center justify-center rounded-md p-1 text-black/100`}
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel className="fixed inset-0 z-20 overflow-y-auto bg-slate-900/[1.0] lg:hidden">
                        <div className="flex items-center justify-between container max-w-screen-2xl mx-auto ss:px-12 px-6 py-6">
                            <div className="flex">
                                <a href="#" className="">
                                    <span className="sr-only">Your Company</span>
                                    <Image src={`/images/logoOftalmologia2.svg`} alt="hoobank" className="w-[170px]" width={170} height={170} />
                                </a>
                            </div>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="flex items-center justify-center rounded-md p-1 text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flow-root container max-w-screen-2xl mx-auto px-12">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                                        <a href="#" className="flex items-center justify-center  border border-transparent bg-slate-500/[0.2] px-5 py-2 text-sm font-medium text-slate-400 shadow-sm hover:bg-slate-900">
                                            <MagnifyingGlassIcon className="w-4 mr-1" /> Buscar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    );
}