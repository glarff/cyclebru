CREATE TABLE workouts (
    workout_pk serial primary key,
    name text NOT NULL,
    overview text NOT NULL,
    objective text NOT NULL,
    training_phase text NOT NULL    
);

CREATE TABLE workoutFocus (
	workout_fk integer NOT NULL,
	focus text NOT NULL
);


INSERT INTO workouts (name, overview, objective, training_phase)
VALUES
	('Tempo Intervals', 'Maintain a cadence of 90 rpm+ during the tempo efforts and look to ride low - mid HRZ 3 for the majority of each one. Just spin easily for the recoveries.', 'Developing your ability to ride at tempo and an introduction to interval training.', 'In the early stages of our Improvers Training Plan or as a light workout.'),
	('Zone Build', 'Aim to hit the heart rate zones described below. Build through the zone gradually and avoid sudden changes in effort, there will always be a time lag before your heart rate responds. Maintain a 90 rpm+ cadence throughout.', 'Developing a feel for your training zones.', 'In the early stages of our Improvers Training Plan or as a light workout.'),
	('Pyramid Intervals 1', 'Efforts should be ridden in HRZ/PZ 4 and at 95 rpm+. Drop resistance and gearing and look to spin in HRZ/PZ 1 for the active recoveries.', 'A threshold boosting workout that is excellent for developing your ability to quickly find and maintain this key intensity..', 'Anytime, both in and out of season.'),
	('3 x 10 Minutes', 'Cadence 90 rpm + during the efforts and “Sweet-Spot” is HRZ/PZ high 3 - low 4. Allow both to drop to easy spinning during recovery. ', 'A great stepping stone to the classic 2 x 20 minutes session.', 'Whenever you are looking to build up your ability to ride at “Sweet-Spot” and Threshold.'),
	('2 x 20 Minutes', 'Cadence should be 90 rpm + during the efforts but allow to drop during recovery. If aiming for “Sweet-spot”, work in HRZ/PZ high Zone 3 - mid Zone 4. If aiming for threshold, work as close to 100% FTHR/FTP as possible.', 'A classic indoor trainer session that is hard to beat for raising threshold and learning to stay focussed and pace long efforts at this key intensity.', 'Work through the session at “sweet-spot” intensity during the early off-season and then build up to completing it at FTP/FTHR as intensity goes up and volume comes down.')


INSERT INTO workoutFocus (workout_fk, focus)
VALUES
	((select workout_pk from workouts where name = 'Tempo Intervals'),'Keep your legs turning over during the recoveries and reduce your gear/resistance.'),
	((select workout_pk from workouts where name = 'Tempo Intervals'),'Maintain a smooth pedal stroke, especially during the HRZ 3 effort.'),
	((select workout_pk from workouts where name = 'Tempo Intervals'),'Don’t stomp on the pedals when you get tired.'),
	((select workout_pk from workouts where name = 'Tempo Intervals'),'Pace the tempo efforts evenly and avoid major fluctuations in heart rate.'),
	((select workout_pk from workouts where name = 'Zone Build'),'Concentrate on a strong but even pedal stroke, don’t let your technique slip if you get tired.'),
	((select workout_pk from workouts where name = 'Zone Build'),'Aim to hit the middle of the Zone midway through each effort and, if you feel good, push on a bit towards the top end.'),
	((select workout_pk from workouts where name = 'Zone Build'),'Keep your cadence up during the Zone 1 blocks, back your gear and resistance right off to allow this.'),
	((select workout_pk from workouts where name = 'Pyramid Intervals 1'),'Having accurate and up to date training zones are key for this session so make sure you test for FTHR/FTP regularly.'),
	((select workout_pk from workouts where name = 'Pyramid Intervals 1'),'Pace the efforts so there’s no drop off. Power, heart rate, speed or intensity should be consistent through the session.'),
	((select workout_pk from workouts where name = 'Pyramid Intervals 1'),'If you’re training for a time trial, perform the efforts in race position.'),
	((select workout_pk from workouts where name = '3 x 10 Minutes'),'Pace the efforts as evenly as possible, don’t go off too hard and maintain a consistent cadence.'),
	((select workout_pk from workouts where name = '3 x 10 Minutes'),'Try to hold a stable racing position without excessive movement of the upper body.'),
	((select workout_pk from workouts where name = '3 x 10 Minutes'),'Make sure you have a bottle of water to hand as these are fairly long efforts.'),
	((select workout_pk from workouts where name = '3 x 10 Minutes'),'As you get stronger and more confident with the session, try to ride predominately in HRZ/PZ 4.'),
	((select workout_pk from workouts where name = '2 x 20 Minutes'),'Pace the efforts as evenly as possible, don’t go off too hard and maintain a consistent cadence.'),
	((select workout_pk from workouts where name = '2 x 20 Minutes'),'Try to hold a stable racing position without excessive movement of the upper body. If training for time trials, use your race position.'),
	((select workout_pk from workouts where name = '2 x 20 Minutes'),'Make sure you have a bottle of water to hand as these are fairly long efforts.')


drop table workoutFocus
drop table workouts


INSERT INTO workoutFocus
VALUES
(
	1, ''
)

(1, ''),
1, 
	1, 'Pace the tempo efforts evenly and avoid major fluctuations in heart rate'),
	1, '')