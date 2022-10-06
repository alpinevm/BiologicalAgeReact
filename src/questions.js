export const QUESTIONS = [
    {
        questionText: 'How frequently do you eat fried, broiled, or barbequed foods?',
        answerOptions: [
            { answerText: 'Often', ageDelta: 4 },
            { answerText: 'Once a day', ageDelta: 3 },
            { answerText: 'Few times per week', ageDelta: 2 },
            { answerText: 'Once a week', ageDelta: 1 },
            { answerText: 'Almost Never', ageDelta: -2 },
        ],
    },
    {
        questionText: 'How often do you consume nutritional oils (not fried or heated)? example flax seed oil',
        answerOptions: [
            { answerText: 'Never', ageDelta: 2 },
            { answerText: 'Once a week', ageDelta: 1 },
            { answerText: 'Once a day', ageDelta: 0 },
            { answerText: '2+ times per day', ageDelta: -1 },
        ],
    },
    {
        questionText: 'How many servings of fruits or vegetables do you consume? (1 serving= 1 cup)',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 3 },
            { answerText: 'Few servings per week', ageDelta: 2 },
            { answerText: 'One per day', ageDelta: 1 },
            { answerText: '3 per day', ageDelta: -1 },
            { answerText: '5+ per day', ageDelta: -2 },
        ],
    },
    {
        questionText: 'How often do you consume whole grains and/or natural fiber? (example: whole wheat, pysllium, brown or wild rice)',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 3 },
            { answerText: 'Once a week', ageDelta: 2 },
            { answerText: 'Few times per week', ageDelta: 1 },
            { answerText: 'Often', ageDelta: -2 },
        ],
    },

    {
        questionText: 'How many glasses of water do you consume daily? (Water does not include coffee, black tea, soda or alcohol)',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 3 },
            { answerText: 'Once per day', ageDelta: 2 },
            { answerText: '4 per day', ageDelta: 1 },
            { answerText: 'Few times per week', ageDelta: 1 },
            { answerText: 'Often', ageDelta: -2 },
        ],
    },
];