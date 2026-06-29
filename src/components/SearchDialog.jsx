'use client'
import { KeyboardEvent, memo, useEffect, useState } from "react";
import React from 'react'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import Link from "next/link";

const SearchDialog = ({ posts }) => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key.toLocaleLowerCase() !== "x") return
            if (!(e.metaKey || e.ctrlKey)) return
            e.preventDefault()
            if (!e.repeat) {
                setOpen(true)
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])
    console.count('search render')
    return (
        <Command>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput  value={query} onValueChange={setQuery} placeholder="جستجو در مقالات..." />
                <CommandList>
                    <CommandEmpty>
                        پستی پیدا نشد!
                    </CommandEmpty>
                    <CommandGroup heading="مقالات">
                        {posts.map(item => (
                            <CommandItem key={item.slug} onSelect={() => setOpen(false)}>
                                <Link href={`/blog/post/${item.slug}`} className="flex flex-col gap-3 w-full">
                                    <span className="text-2xl">{item.title}</span>
                                    <img src={item.thumb} alt="" className="rounded-2xl" width={200} height={200} />
                                    <div className="w-full h-0.5 bg-gray-600"></div>
                                </Link>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </Command>
    )
}

export default memo(SearchDialog)
