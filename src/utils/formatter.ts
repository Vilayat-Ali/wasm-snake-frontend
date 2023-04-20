export const formatScore = (score: number): string => {
    const formatter: Intl.NumberFormat = Intl.NumberFormat('en', {
        notation: 'compact'
    });
    
    return formatter.format(score);
}