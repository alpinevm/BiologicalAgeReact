export const QUESTIONS = [
    {
        questionText: 'How frequently do you eat fried, broiled, or barbequed foods?',
        answerOptions: [
            { answerText: 'Often', ageDelta: 4, isCorrect: false },
            { answerText: 'Once a day', ageDelta: 3, isCorrect: false },
            { answerText: 'Few times per week', ageDelta: 2, isCorrect: false },
            { answerText: 'Once a week', ageDelta: 1, isCorrect: true },
            { answerText: 'Almost Never', ageDelta: -2, isCorrect: false },
        ],
    },
    {
        questionText: 'How often do you consume nutritional oils (not fried or heated)? example flax seed oil',
        answerOptions: [
            { answerText: 'Never', ageDelta: 2, isCorrect: false },
            { answerText: 'Once a week', ageDelta: 1, isCorrect: false },
            { answerText: 'Once a day', ageDelta: 0, isCorrect: true },
            { answerText: '2+ times per day', ageDelta: -1, isCorrect: false },
        ],
    },
    {
        questionText: 'How many servings of fruits or vegetables do you consume? (1 serving 2= 1 cup)',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 3, isCorrect: false },
            { answerText: 'Few servings per week', ageDelta: 2, isCorrect: false },
            { answerText: 'One per day', ageDelta: 1, isCorrect: true },
            { answerText: '3 per day', ageDelta: -1, isCorrect: true },
            { answerText: '5+ per day', ageDelta: -2, isCorrect: false },
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
            { answerText: 'Almost None', ageDelta: 3 },
            { answerText: 'One per day', ageDelta: 2 },
            { answerText: '4 per day', ageDelta: 1 },
            { answerText: '8 per day', ageDelta: 0 },
            { answerText: '10+ per day', ageDelta: -2 },
        ],
    },
    {
        questionText: 'How many Do you consume sugar, soda, white flour, or other processed foods? (example: canned foods, fast foods, TV dinners, foods with preservatives added) of water do you consume daily? (Water does not include coffee, black tea, soda or alcohol)',
        answerOptions: [
            { answerText: '3+ times per week', ageDelta: 3 },
            { answerText: 'Once a day', ageDelta: 2 },
            { answerText: 'Few times per week ', ageDelta: 1 },
            { answerText: 'Almost Never', ageDelta: -1 },
        ],
    },
    {
        questionText: 'How many alcoholic drinks do you consume per week?',
        answerOptions: [
            { answerText: '12+ per week', ageDelta: 3 },
            { answerText: '8 per week', ageDelta: 2 },
            { answerText: '4 per week', ageDelta: 1 },
            { answerText: '2 per week', ageDelta: 0 },
            { answerText: 'Almost Never', ageDelta: -1 },
        ],
    },
    {
        questionText: 'How often do you add salt to you food?',
        answerOptions: [
            { answerText: 'All food', ageDelta: 3 },
            { answerText: 'Daily', ageDelta: 2 },
            { answerText: 'Few times per week', ageDelta: 1 },
            { answerText: 'Once a month', ageDelta: 0 },
            { answerText: 'Almost Never', ageDelta: -1},
        ],
    },
    {
        questionText: 'Do you take a multi-vitamin?',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 2 },
            { answerText: 'Once a week', ageDelta: 1 },
            { answerText: 'Few times per week', ageDelta: 0 },
            { answerText: 'Daily', ageDelta: -1 },
        ],
    },
    {
        questionText: 'Do you take anti-oxidants? (example: grape seed extract, selenium)',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 3 },
            { answerText: 'Once a week', ageDelta: 2 },
            { answerText: 'Few times per week', ageDelta: 1 },
            { answerText: 'Daily', ageDelta: -2 },
        ],
    },
    {
        questionText: 'Do you exercise (30 or more minutes of continuous activity)?',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 3 },
            { answerText: 'Once per week', ageDelta: 2 },
            { answerText: '3 times per week', ageDelta: -2 },
            { answerText: '5+ times per week', ageDelta: -3 },
        ],
    },
    {
        questionText: 'When you exercise, do you do so for more than 2 hours? (If you do not exercise, please put "Almost Never" as your answer)',
        answerOptions: [
            { answerText: 'Most Times', ageDelta: 4 },
            { answerText: '50% of the time', ageDelta: 2 },
            { answerText: 'Almost Never', ageDelta: 0 },
        ],
    },
    {
        questionText: 'Do you sleep well and awake rested?',
        answerOptions: [
            { answerText: 'Almost Never', ageDelta: 3 },
            { answerText: 'Sometimes', ageDelta: 2 },
            { answerText: 'Usually', ageDelta: 0 },
            { answerText: 'Always', ageDelta: -1 },
        ],
    },
    {
        questionText: 'How often do you have normal bowel movements?',
        answerOptions: [
            { answerText: 'Once a week', ageDelta: 4 },
            { answerText: 'Every 4 days', ageDelta: 3 },
            { answerText: 'Every second day', ageDelta: 2 },
            { answerText: 'Daily', ageDelta: 0 },
            { answerText: '2+ times per day', ageDelta: -2 },
        ],
    },
    {
        questionText: 'Is there a history of the following conditions in your family? (cancer, diabetes, heart disease, depression, obesity, liver disease, high cholesterol, high blood pressure)',
        answerOptions: [
            { answerText: '2 or more', ageDelta: 1 },
            { answerText: 'One', ageDelta: 0 },
            { answerText: 'None', ageDelta: -1 },
        ]
    },
    {
        questionText: 'Have you ever had any of the following conditions? (cancer, diabetes, heart disease, depression, obesity, liver disease, high cholesterol, high blood pressure)',
        answerOptions: [
            { answerText: '2 or more', ageDelta: 3 },
            { answerText: 'One', ageDelta: 2 },
            { answerText: 'None', ageDelta: -2 },
        ],
    },
    {
        questionText: 'How frequently do you experience the following conditions? (headache, fever, sore throats, muscle aches (not exercise induced) colds or flu, rash, swelling)',
        answerOptions: [
            { answerText: 'Once a day', ageDelta: 3 },
            { answerText: 'Once a week', ageDelta: 2 },
            { answerText: 'Once a month', ageDelta: 0 },
            { answerText: 'Almost never', ageDelta: -1 },
        ],
    },
    {
        questionText: 'Have you ever been exposed to heavy metals or toxic substances? (examples: mechanics, hair dressers, nail technicians, etc..)',
        answerOptions: [
            { answerText: 'Daily', ageDelta: 4 },
            { answerText: 'Weekly', ageDelta: 3 },
            { answerText: 'Monthly', ageDelta: 2 },
            { answerText: 'Almost Never', ageDelta: 0 },
        ],
    },
    {
        questionText: 'Have you ever been exposed to heavy metals via dental work or fillings? (example: mercury fillings or other fillings)',
        answerOptions: [
            { answerText: '3+ fillings', ageDelta: 4 },
            { answerText: '2 fillings', ageDelta: 3 },
            { answerText: '1 filling', ageDelta: 2 },
            { answerText: 'None', ageDelta: 0 },
        ],
    },
    {
        questionText: 'How many full meals do you eat per day? (a snack is not a full meal)',
        answerOptions: [
            { answerText: '4+ per day', ageDelta: 2 },
            { answerText: '3 per day', ageDelta: 0 },
            { answerText: '2 per day', ageDelta: 1 },
            { answerText: 'One per day', ageDelta: 2 },
            { answerText: 'None', ageDelta: 3 },
        ],
    },
    {
        questionText: 'At work or at home, how often are you in front of electronic equipment? (example: computers, television, live cameras, electrical wires)',
        answerOptions: [
            { answerText: '8+ hours per day', ageDelta: 3 },
            { answerText: '6+ hours per day', ageDelta: 2 },
            { answerText: 'Few hours per day', ageDelta: 1 },
            { answerText: 'Almost Never', ageDelta: 0 },
        ],
    },
    {
        questionText: 'How often are you exposed to cigarette smoke (direct or second hand), or how often do you use a vpae or e-cigarette?',
        answerOptions: [
            { answerText: 'All day', ageDelta: 4 },
            { answerText: 'Few times per day', ageDelta: 3 },
            { answerText: 'Few times per week', ageDelta: 1 },
            { answerText: 'Almost Never', ageDelta: -1 },
        ],
    },
    {
        questionText: 'Do you use recreational or street drugs? How often?',
        answerOptions: [
            { answerText: '2+ times per day', ageDelta: 4 },
            { answerText: 'Once a day', ageDelta: 3 },
            { answerText: 'Once a week', ageDelta: 2 },
            { answerText: 'Once a month', ageDelta: 1 },
            { answerText: 'Never', ageDelta: 0 },
        ],
    },
    {
        questionText: 'Do you drive in heavy traffic?',
        answerOptions: [
            { answerText: 'For a living', ageDelta: 3 },
            { answerText: 'Daily (3+ hours)', ageDelta: 2 },
            { answerText: 'Daily (1-2 hours)', ageDelta: 1 },
            { answerText: 'Almost Never', ageDelta: -1 },
        ],
    },
    {
        questionText: 'At work and/or home, do you experience stress? How much or how little?',
        answerOptions: [
            { answerText: 'Very High', ageDelta: 4 },
            { answerText: 'High', ageDelta: 3 },
            { answerText: 'Moderate', ageDelta: 2 },
            { answerText: 'Slight', ageDelta: 1 },
            { answerText: 'Almost none', ageDelta: -2 },
        ],
    },
];;
