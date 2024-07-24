import Link from "next/link";

export default function PageTitle({
    // title,
    children
}: {
    // title: string,
    children: React.ReactNode
}) {
    return (
    <div className="pt-0 lg:pt-10 pb-20 flex items-center justify-center">
        <div className="w-full">
            {children}
        </div>
    </div>
    )
}
