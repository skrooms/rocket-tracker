export interface Player {
    _id: string,
    epicUsername: string,
    rankedStats: {
        ranks: [
            {
                division: number,
                played: number,
                rank: string,
                playlist: string,
                mmr: number,
                streak: number
            },
            {
                division: number,
                played: number,
                rank: string,
                playlist: string,
                mmr: number,
                streak: number
            },
            {
                division: number,
                played: number,
                rank: string,
                playlist: string,
                mmr: number,
                streak: number
            },
            {
                division: number,
                played: number,
                rank: string,
                playlist: string,
                mmr: number,
                streak: number
            },
            {
                division: number,
                played: number,
                rank: string,
                playlist: string,
                mmr: number,
                streak: number
            },
            {
                division: number,
                played: number,
                rank: string,
                playlist: string,
                mmr: number,
                streak: number
            },
            {
                division: number,
                played: number,
                rank: string,
                playlist: string,
                mmr: number,
                streak: number
            }
        ],
        reward: {
            progress: number,
            level: string
        },
        __v: number
    }
}