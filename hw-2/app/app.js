angular.module('questions', []).constant('Data', {
    questions: [
        {question: 'How often do you watch sports?', options: [
            {value: 'Everyday'  },
            {value: 'Often', answer: true},
            {value: 'Some days'},
            {value: 'Rarely'},
            {value: 'Never'}
        ]},
        {question: 'What is the best pet for your home?', options: [
            {value: 'Cat', answer: true },
            {value: 'Dog'},
            {value: 'Fish'},
            {value: 'Rabbit'},
            {value: 'Other'}
        ]},
        {question: 'What is your preferred bank?', options: [
            {value: 'Chase'},
            {value: 'Citi'},
            {value: 'Bank of America', answer: true},
            {value: 'Wells Fargo'},
            {value: 'Regional'},
            {value: 'Online'},
            {value: 'Other'}
        ]},
        {question: 'How many siblings do you have?', options: [
            {value: 'More than 4'},
            {value: '4'},
            {value: '3', answer: true},
            {value: '2'},
            {value: '1'},
            {value: 'None'}
        ]},
        {question: 'Do you eat seafood?', options: [
            {value: true},
            {value: false , answer: true}
        ]}
    ]
});