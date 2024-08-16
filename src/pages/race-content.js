const races = [
    {
        "race_event_id": "CityMarathon2024",
        "race_name": "City Marathon 2024",
        "race_desc": 'Austin, Texas',
        "date": '01/11/2024',
        "registration_open": false,
        "tags":[{"text": '26.2 miles',"handle":"marathon"}],
        "participants": [
            {
                "participant_id": "1",
                "participant_name": "Rosa Parks",
                "tag_id": "TID001",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-08-11 07:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Midway Point",
                        "timestamp": "2024-08-11 08:30:00",
                        "lap_count": 1,
                        "reader_id": "MidwayReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-08-11 09:45:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:45:00",
                "placement": 2,
                "laps_completed": 1
            },
            {
                "participant_id": "5",
                "participant_name": "Nicholas Kristof",
                "tag_id": "TID005",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-09-15 08:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Hilltop",
                        "timestamp": "2024-09-15 09:35:00",
                        "lap_count": 1,
                        "reader_id": "HilltopReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-09-15 11:00:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:00:00",
                "placement": 4,
                "laps_completed": 1
            },
            {
                "participant_id": "2",
                "participant_name": "Patricia Schroeder",
                "tag_id": "TID002",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-08-11 07:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Midway Point",
                        "timestamp": "2024-08-11 08:40:00",
                        "lap_count": 1,
                        "reader_id": "MidwayReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-08-11 10:00:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:00:00",
                "placement": 1,
                "laps_completed": 1
            },
            {
                "participant_id": "3",
                "participant_name": "Anita Hill",
                "tag_id": "TID003",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-08-11 07:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Midway Point",
                        "timestamp": "2024-08-11 08:55:00",
                        "lap_count": 1,
                        "reader_id": "MidwayReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-08-11 10:30:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:30:00",
                "placement": 3,
                "laps_completed": 1
            }
        ]
    },
    {
        "race_event_id": "MountainTrail2024",
        "race_name": "Mountain Trail Run 2024",
        "date": '08/06/2024',
        "race_desc": 'Denver, Colorado',
        "registration_open": false,
        "tags":[{"text": '3.14 miles',"handle":"5k"}],
        "participants": [
            {
                "participant_id": "4",
                "participant_name": "Kimberlé Crenshaw",
                "tag_id": "TID004",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-09-15 08:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Hilltop",
                        "timestamp": "2024-09-15 09:15:00",
                        "lap_count": 1,
                        "reader_id": "HilltopReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-09-15 10:30:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:30:00",
                "placement": 1,
                "laps_completed": 1
            },
            {
                "participant_id": "5",
                "participant_name": "Nicholas Kristof",
                "tag_id": "TID005",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-09-15 08:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Hilltop",
                        "timestamp": "2024-09-15 09:35:00",
                        "lap_count": 1,
                        "reader_id": "HilltopReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-09-15 11:00:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:00:00",
                "placement": 2,
                "laps_completed": 1
            },
            {
                "participant_id": "6",
                "participant_name": "Frederick Douglass",
                "tag_id": "TID006",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-09-15 08:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Hilltop",
                        "timestamp": "2024-09-15 09:50:00",
                        "lap_count": 1,
                        "reader_id": "HilltopReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-09-15 11:30:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:30:00",
                "placement": 3,
                "laps_completed": 1
            }
        ]
    },
    {
        "race_event_id": "CoastalHalf2024",
        "race_name": "Coastal Half Marathon 2024",
        "race_desc": 'Port Aransas, Texas',
        "date": '05/09/2024',
        "registration_open": false,
        "tags":[{"text": '1 mile',"handle":"1-m"}],
        "participants": [
            {
                "participant_id": "7",
                "participant_name": "Leymah Gbowee",
                "tag_id": "TID007",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-10-05 06:30:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "5K Mark",
                        "timestamp": "2024-10-05 07:10:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader1"
                    },
                    {
                        "checkpoint_location": "10K Mark",
                        "timestamp": "2024-10-05 07:45:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader2"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-10-05 08:30:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:00:00",
                "placement": 4,
                "laps_completed": 1
            },            {
                "participant_id": "1",
                "participant_name": "Rosa Parks",
                "tag_id": "TID001",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-08-11 07:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Midway Point",
                        "timestamp": "2024-08-11 08:30:00",
                        "lap_count": 1,
                        "reader_id": "MidwayReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-08-11 09:45:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:45:00",
                "placement": 2,
                "laps_completed": 1
            },
            {
                "participant_id": "8",
                "participant_name": "Shirley Chisholm",
                "tag_id": "TID008",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-10-05 06:30:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "5K Mark",
                        "timestamp": "2024-10-05 07:20:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader1"
                    },
                    {
                        "checkpoint_location": "10K Mark",
                        "timestamp": "2024-10-05 08:00:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader2"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-10-05 09:00:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:30:00",
                "placement": 3,
                "laps_completed": 1
            },
            {
                "participant_id": "5",
                "participant_name": "Nicholas Kristof",
                "tag_id": "TID005",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-09-15 08:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Hilltop",
                        "timestamp": "2024-09-15 09:35:00",
                        "lap_count": 1,
                        "reader_id": "HilltopReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-09-15 11:00:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:00:00",
                "placement": 5,
                "laps_completed": 1
            },
            {
                "participant_id": "9",
                "participant_name": "Jimmy Carter",
                "tag_id": "TID009",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-10-05 06:30:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "5K Mark",
                        "timestamp": "2024-10-05 07:25:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader1"
                    },
                    {
                        "checkpoint_location": "10K Mark",
                        "timestamp": "2024-10-05 08:10:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader2"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-10-05 09:30:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:00:00",
                "placement": 1,
                "laps_completed": 1
            }
        ]
    },    {
        "race_event_id": "CoastalHalf2025",
        "race_name": "Coastal Half Marathon 2025",
        "race_desc": 'Port Aransas, Texas',
        "date": '12/30/2025',
        "registration_open": true,
        "tags":[{"text": '13.1 miles',"handle":"13-1-m"}],
        "participants": [
            {
                "participant_id": "7",
                "participant_name": "Leymah Gbowee",
                "tag_id": "TID007",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-10-05 06:30:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "5K Mark",
                        "timestamp": "2024-10-05 07:10:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader1"
                    },
                    {
                        "checkpoint_location": "10K Mark",
                        "timestamp": "2024-10-05 07:45:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader2"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-10-05 08:30:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:00:00",
                "placement": 4,
                "laps_completed": 1
            },            {
                "participant_id": "1",
                "participant_name": "Rosa Parks",
                "tag_id": "TID001",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-08-11 07:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Midway Point",
                        "timestamp": "2024-08-11 08:30:00",
                        "lap_count": 1,
                        "reader_id": "MidwayReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-08-11 09:45:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:45:00",
                "placement": 2,
                "laps_completed": 1
            },
            {
                "participant_id": "8",
                "participant_name": "Shirley Chisholm",
                "tag_id": "TID008",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-10-05 06:30:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "5K Mark",
                        "timestamp": "2024-10-05 07:20:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader1"
                    },
                    {
                        "checkpoint_location": "10K Mark",
                        "timestamp": "2024-10-05 08:00:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader2"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-10-05 09:00:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "02:30:00",
                "placement": 3,
                "laps_completed": 1
            },
            {
                "participant_id": "5",
                "participant_name": "Nicholas Kristof",
                "tag_id": "TID005",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-09-15 08:00:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "Hilltop",
                        "timestamp": "2024-09-15 09:35:00",
                        "lap_count": 1,
                        "reader_id": "HilltopReader"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-09-15 11:00:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:00:00",
                "placement": 5,
                "laps_completed": 1
            },
            {
                "participant_id": "9",
                "participant_name": "Jimmy Carter",
                "tag_id": "TID009",
                "checkpoints": [
                    {
                        "checkpoint_location": "Start Line",
                        "timestamp": "2024-10-05 06:30:00",
                        "lap_count": 0,
                        "reader_id": "StartLineReader"
                    },
                    {
                        "checkpoint_location": "5K Mark",
                        "timestamp": "2024-10-05 07:25:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader1"
                    },
                    {
                        "checkpoint_location": "10K Mark",
                        "timestamp": "2024-10-05 08:10:00",
                        "lap_count": 1,
                        "reader_id": "CheckpointReader2"
                    },
                    {
                        "checkpoint_location": "Finish Line",
                        "timestamp": "2024-10-05 09:30:00",
                        "lap_count": 1,
                        "reader_id": "FinishLineReader"
                    }
                ],
                "total_race_time": "03:00:00",
                "placement": 1,
                "laps_completed": 1
            }
        ]
    }      
]

export default races;