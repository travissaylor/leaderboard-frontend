import '../css/app.css'
import React from 'react'
import NextHead from 'next/head'

const Head = ({title}) => (
    <NextHead>
        <meta charset="utf-8"/>
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{title} | Parade Leaderboard</title>
    </NextHead>
);

export default Head;