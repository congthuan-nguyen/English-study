import { Col, Row, Segmented, Skeleton, Tabs } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Definition from "./Definition";

const ValueResearch = (props) => {
  const [render, setRender] = useState(0);
  const [index, setIndex] = useState(0);
  const [audiosPlay, setAudiosPlay] = useState([]);
  const [audioPlay, setAudioPlay] = useState(0);
  const [play, setPlay] = useState(0);

  useEffect(() => {
    // Lọc ra các audio không rỗng
    const filteredAudios = props.valueSearch.map((item) => ({
      ...item,
      phonetics: item.phonetics.filter((audio) => audio.audio !== ""),
    }));
    const onlyPhonetics = filteredAudios
      .map((item) => item.phonetics)
      .flat()
      .filter((item) => item.hasOwnProperty("text"))
      .reduce((acc, current) => {
        const isDuplicate = acc.some(
          (item) => item.text === current.text && item.audio === current.audio
        );
        if (!isDuplicate) {
          acc.push(current);
        }
        return acc;
      }, [])
      .reduce((acc, cur) => {
        const existingGroup = acc.find((group) => group[0]?.text === cur.text);
        if (existingGroup) {
          existingGroup.push(cur);
        } else {
          acc.push([cur]);
        }
        return acc;
      }, []);
    console.log(play);
    setAudiosPlay(onlyPhonetics);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.render, render, index]);
  return (
    <Row>
      <Col span={24} className="p-16">
        <Skeleton loading={props.loadingResearch} active>
          <Segmented
            options={props.valueSearch.map((_, index) => ({
              label: "Meanings " + (index + 1),
              value: index,
            }))}
            onChange={(value) => {
              setIndex(value);
            }}
          />
        </Skeleton>
      </Col>
      <Col span={24}>
        <Skeleton loading={props.loadingResearch} active>
          <Tabs
            onChange={(value) => {
              setAudioPlay(value);
            }}
            items={
              audiosPlay &&
              audiosPlay.map((ele, i) => {
                return {
                  label: `${props.vocabularySearch} - ${ele[0]?.text}`,
                  key: i,
                  children: (
                    <>
                      <AudioPlayer
                        autoPlay
                        src={audiosPlay[audioPlay][play].audio}
                        onPlay={(e) => console.log("onPlay")}
                      />
                    </>
                  ),
                };
              })
            }
          />
          {audiosPlay[audioPlay] ? (
            <Segmented
              className="mt-8"
              options={audiosPlay[audioPlay].map((ele, index) => ({
                label: ele?.audio.substring(
                  ele?.audio.lastIndexOf(".") - 2,
                  ele?.audio.lastIndexOf(".")
                ),
                value: index,
              }))}
              onChange={(value) => {
                setPlay(value);
              }}
            />
          ) : (
            "Không có dữ liệu"
          )}
        </Skeleton>
      </Col>
      <Col span={24}>
        <Skeleton loading={props.loadingResearch} active>
          <Definition definition={props.valueSearch[index]} />
        </Skeleton>
      </Col>
    </Row>
  );
};

export default ValueResearch;
