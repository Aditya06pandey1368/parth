"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

// Mock data for the leaderboard
const topPerformers = [
    {
        id: 1,
        name: "Pratham Lashkari",
        username: "@pratham",
        score: 887.15,
        rank: 1,
        institution: "Sushila Devi Bansal College of Technology",
        avatar: "",
    },
    {
        id: 2,
        name: "Rajat Joshi",
        username: "@rajat.18",
        score: 885.39,
        rank: 2,
        institution: "Graphic era hill university dehradun",
        avatar: "",
    },
    {
        id: 3,
        name: "Anuj Singh",
        username: "@anuj28",
        score: 881.92,
        rank: 3,
        institution: "National Institute of Technology Raipur",
        avatar: "",
    },
];

const rankingData = [
    {
        id: 1,
        name: "Pratham Lashkari",
        username: "@pratham",
        institution: "Sushila Devi Bansal College of Technology",
        rank: 1,
        score: 887.15,
        avatar: "",
    },
    {
        id: 2,
        name: "Rajat Joshi",
        username: "@rajat.18",
        institution: "Graphic era hill university dehradun",
        rank: 2,
        score: 885.39,
        avatar: "",
    },
    {
        id: 3,
        name: "Anuj Singh",
        username: "@anuj28",
        institution: "National Institute of Technology Raipur",
        rank: 3,
        score: 881.92,
        avatar: "",
    },
    {
        id: 4,
        name: "Deepak",
        username: "@phoenixdev100",
        institution: "Sharda University",
        rank: 4,
        score: 880.30,
        avatar: "",
    },
    {
        id: 5,
        name: "Rameez Parwez",
        username: "@rameez",
        institution: "Haldia Institute of Technology",
        rank: 5,
        score: 879.26,
        avatar: "",
    },
    {
        id: 6,
        name: "Sajal Namdeo",
        username: "@sajal07",
        institution: "Indian Institute of Information Technology",
        rank: 6,
        score: 877.40,
        avatar: "",
    },
    {
        id: 7,
        name: "Raghu Teja",
        username: "@raghtr",
        institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
        rank: 7,
        score: 876.90,
        avatar: "",
    },
    {
        id: 8,
        name: "Hiren Joshi",
        username: "@hirenjoshi",
        institution: "Parul Institute of Technology",
        rank: 8,
        score: 874.25,
        avatar: "",
    },
    {
        id: 9,
        name: "Harsha",
        username: "@Rage-Fox",
        institution: "Aditya Engineering College",
        rank: 9,
        score: 873.47,
        avatar: "",
    },
];

export default function LeaderboardPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Leaderboard Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
                >
                    <h1 className="text-3xl font-bold mb-4 md:mb-0">Leaderboard</h1>
                    <Button
                        variant="outline"
                        className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 dark:border-gray-600 dark:hover:bg-gray-800"
                    >
                        How It Works?
                    </Button>
                </motion.div>

                {/* Region Selector */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        <Button variant="outline" className="flex items-center gap-2 dark:border-gray-600 dark:hover:bg-gray-800">
                            Global
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </Button>
                    </div>
                </motion.div>

                {/* Top Performers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {topPerformers.map((performer, index) => (
                            <motion.div
                                key={performer.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                            >
                                <Card className={`overflow-hidden dark:bg-gray-800 dark:border-gray-700 ${performer.rank === 1 ? 'border-yellow-400 dark:border-yellow-500 border-2' : ''}`}>
                                    <CardContent className="p-6 relative">
                                        {performer.rank === 1 && (
                                            <div className="absolute top-4 right-4">
                                                <Trophy className="h-8 w-8 text-yellow-500" />
                                            </div>
                                        )}
                                        <div className="flex items-center mb-4">
                                            <Avatar className="h-12 w-12 border-2 border-gray-200 dark:border-gray-600">
                                                <AvatarImage src={performer.avatar} alt={performer.name} />
                                                <AvatarFallback>{performer.name.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            <div className="ml-4">
                                                <h3 className="font-semibold">{performer.name}</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{performer.username}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Points</p>
                                                <p className="text-2xl font-bold">{performer.score}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Rank</p>
                                                <p className="text-2xl font-bold">#{performer.rank}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

       

                {/* Global Ranking */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="mb-4">
                        <h2 className="text-xl font-bold">Global Ranking <span className="text-sm font-normal text-gray-500 dark:text-gray-400">(Cumulative)</span></h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Ranks coders based on their Codalo Score (out of 900) — a balanced measure of Projects, Seminar, and conference credits.</p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden border dark:bg-gray-800 dark:border-gray-700">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-gray-700/50">
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">User Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Institution</th>
                                        <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 dark:text-gray-400 bg-yellow-50 dark:bg-yellow-900/20">Rank</th>
                                        <th className="px-6 py-3 text-right text-sm font-medium text-gray-500 dark:text-gray-400">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rankingData.map((user, index) => (
                                        <motion.tr
                                            key={user.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.05 * index }}
                                            className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center">
                                                    <Avatar className="h-8 w-8 mr-3">
                                                        <AvatarImage src={user.avatar} alt={user.name} />
                                                        <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-medium">{user.name}</p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.username}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">{user.institution}</td>
                                            <td className="px-6 py-4 text-center">
                                                {user.rank <= 3 ? (
                                                    <div className="flex justify-center">
                                                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-none dark:bg-yellow-900/50 dark:text-yellow-300 dark:hover:bg-yellow-900">
                                                            <Trophy className="h-3 w-3 mr-1 text-yellow-600 dark:text-yellow-500" />
                                                            #{user.rank}
                                                        </Badge>
                                                    </div>
                                                ) : (
                                                    <span className="font-medium">#{user.rank}</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium">{user.score}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}