import { Link } from "@heroui/link";
import Image from "next/image";

export default function Footer(){
    return(
        <footer className="w-full flex items-center justify-center py-3">
            <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://faizfarhan.com"
                target="_blank"
            >
            <span className="flex items-center text-sm ">
                Made with
                <Image
                    src='/heart.svg'
                    alt="BMDex"
                    width={20}
                    height={20}
                />
                by
            </span>
            <p className="text-primary text-sm">Faiz Farhan</p>
            </Link>
        </footer>
    )
}