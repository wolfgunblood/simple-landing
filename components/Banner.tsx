"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

export default function Banner() {
    const [isVisible, setIsVisible] = useState(true)
    const [timeLeft, setTimeLeft] = useState(7 * 24 * 60 * 60) // 7 days in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (time: number) => {
        const days = Math.floor(time / (24 * 60 * 60))
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60))
        const minutes = Math.floor((time % (60 * 60)) / 60)
        return `${days}d ${hours}h ${minutes}m`
    }

    if (!isVisible) return null

    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x"></div>
            <div className="relative bg-black/20 text-white p-4 sm:p-6 rounded-lg shadow-lg">

                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-center sm:text-left">
                        <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
                            NextWrapper
                        </h2>
                        <p className="text-lg mb-4 opacity-90">
                            Build SaaS, AI tool, and web app builder in days not months </p>
                        <p className="text-sm font-semibold">
                            Limited Time Offer: Exclusive content awaits early visitors! Offer ends in {formatTime(timeLeft)}
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="https://nextwrapper.com"
                            target='_blank'
                            className="inline-flex items-center px-6 py-3 text-lg bg-white text-blue-600 hover:bg-white/90 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg"
                        >
                            Explore
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>

                        {/* <p className="text-sm opacity-75">Join 10,000+ happy users</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}