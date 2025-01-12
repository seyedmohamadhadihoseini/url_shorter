import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest,
    { params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id;
    console.log(id);
    const urlData = await prisma.shortUrl.findFirst({
        where: {
            output: id
        }, select: {
            input: true
        }
    });
    const url = urlData?.input;
    if (!url) {
        return redirect("/");
    } else {
        return redirect(url)
    }
}