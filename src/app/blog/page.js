import Blog from "@/pages/Blog";
import { Suspense } from "react";

export default function BlogPage() {
    return (
        <Suspense>
            <Blog />
        </Suspense>
    )
}