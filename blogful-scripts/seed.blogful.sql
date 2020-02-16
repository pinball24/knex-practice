INSERT INTO blogful_articles (title, date_published, content)
VALUES
('Dogs are cool', now() - '21 days'::INTERVAL, 'I like dogs, they are so cool.'),
('Cats are cool', now() - '19 days':: INTERVAL, 'I like cats, they are so cool'),
('The greatest boxer ever!', now() - '18 days':: INTERVAL, 'The greatest boxer to ever do it is for sure ffloyd mayweather'),
('My day', now() - '16 days':: INTERVAL, 'My day was dumb umm'),
('Birthday time', now() - '14 days':: INTERVAL, 'My birthday is tomorrow'),
('The mma goat!', now() - '13 days'::INTERVAL, 'The greatest to ever do it in mma is jon johns. He''s never lost a fight'),
('My favorite football team!', now() - '11 days'::INTERVAL, 'The rams are my favorite football team.'),
('I''m no good at blogs', now() - '9 days'::INTERVAL, 'It''s hard to think of things off the top of my head for this blogful practice.'),
('Only two more to go', now() - '5 days'::INTERVAL, 'Two more of this seeding to go'),
('Only one more to go', now() - '3 days'::INTERVAL, 'The final thing to seed into the data...YAY!'),
('Nevermind I have to make 20 total', now(), 'I actually have to have 20 sets of data'),
('The best color, or is it a color', now(), 'I think the best color is black, if you count it as a color'),
('Another post', now(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
('Let do another one', now(), 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In.'),
('And another one', now(), 'This is another post'),
('Lets go with another because why not', now(), 'Just another post'),
('Now only three more to go', now(), 'So close to the end!'),
('The sky is blue', now(), 'The sky is oh so blue.'),
('The final stretch.', now(), 'We are finally on the final stretch!'),
('The last post', now(), 'The final blogful seeding post is done for good!')
;