import {Container, Flex, Slider} from "@mantine/core";
import {useHover} from "@mantine/hooks";
import {formatTime} from "../../util/date.ts";
import {useCallback, useEffect, useRef, useState} from "react";
import Forward30Icon from '@mui/icons-material/Forward30';
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Replay10Icon from '@mui/icons-material/Replay10';

import classes from "./AudioPlayer.module.css"
import {setCurrentEpisode} from "../../store/player-slice.ts";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";

interface AudioPlayerProps {
    url: string;
    duration: number;
}

function AudioPlayer({url, duration}: AudioPlayerProps) {
    const {hovered, ref} = useHover();
    const [currentTime, setCurrentTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const dispatch = useAppDispatch();
    const currentPlayer = useAppSelector(state => state.player.episode);
    const audioRef = useRef<HTMLAudioElement>(null);
    const timer = useRef(0);

    function changeAudioTime(value: number) {
        audioRef.current!.currentTime = value;
        setCurrentTime(value);
    }

    const handlePlayPause = useCallback(function handlePlayPause() {
        setIsPlaying(isPlaying => !isPlaying);
        if (isPlaying) {
            audioRef.current!.pause();
        } else {
            dispatch(setCurrentEpisode(url))
            audioRef.current!.play();
        }
    }, [dispatch, isPlaying, url]);


    useEffect(() => {
        if (isPlaying) {
            if (currentTime <= duration) {
                timer.current = setInterval(() => {
                    setCurrentTime(currentTime => currentTime + 1);
                }, 1000);
            } else {
                clearInterval(timer.current);
                handlePlayPause();
                changeAudioTime(0);
            }
        }
        return () => clearInterval(timer.current);
    }, [isPlaying, currentTime, audioRef, duration, handlePlayPause]);


    if (url !== currentPlayer && isPlaying) {
        handlePlayPause();
    }

    return (
        <Container>
            <Flex gap="xs" justify="center" align="center">

                <Replay10Icon
                    className={classes.icon}
                    onClick={() => changeAudioTime(currentTime - 10)}
                />
                {isPlaying ? <PauseCircleOutlineIcon className={classes.icon} onClick={handlePlayPause} />
                    : <PlayCircleOutlineIcon className={classes.icon} onClick={handlePlayPause} />
                }
                <Forward30Icon
                    className={classes.icon}
                    onClick={() => changeAudioTime(currentTime + 30)}
                />
                <audio src={url} preload="none"  ref={audioRef}/>

                <span style={{width: '40px'}}>{formatTime(currentTime)}</span>

                <Slider
                    min={0}
                    max={duration}
                    ref={ref}
                    label={formatTime(currentTime)}
                    onChange={setCurrentTime}
                    value={currentTime}
                    onChangeEnd={(value: number) => changeAudioTime(value)}
                    styles={{
                        thumb: {
                            transition: 'opacity 150ms ease', opacity: hovered ? 1 : 0,
                        },
                        root: { width: '75%' }
                    }}
                />
                <span>-{formatTime(duration - currentTime)}</span>
            </Flex>
        </Container>
    )
}

export default AudioPlayer;