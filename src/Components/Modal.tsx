// 전체 랭킹 display Modal
// 참고 : https://jeewonscript.tistory.com/25

import React, {useState, useEffect, PropsWithChildren} from "react";
import styled from "styled-components";
import ImageComponent from "../Components/FoodImage";
import axios from "axios";
import Rank1 from "../Assets/Img/rank1.png";
import Rank2 from "../Assets/Img/rank2.png";
import Rank3 from "../Assets/Img/rank3.png";
import Rank4 from "../Assets/Img/rank4.png";
import Rank5 from "../Assets/Img/rank5.png";

const ModalContainer = styled.div`
  flex-wrap: wrap;
  min-width: 100%;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
`;

const DialogBox = styled.dialog`
  flex: 1;
  min-width: 100%; /* 크기를 축소할 비율에 따라 조절 가능 */ 
  transform: scale(0.8); /* 크기를 50%로 축소 */
  height: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

const RankBox = styled.ul`
    flex-direction: row;
    max-height: 41em;
    width: 65%;
    margin: 8px auto 0; /* 가운데 정렬 및 상단 여백 수정 */
    flex-wrap: wrap;
    align-items: flex-start;
`;

const FoodBox = styled.ul`
  align-content: vertical;
  min-width: calc(50% - 1em); 
  min-height: 33%;
  max-height: 33%;
  border: 1px solid #aaa;
  border-radius: 7px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1em;
  margin: 0.5em;
  transition: all 0.4s;
  background-color: white;

  &:hover {
    background-color: #B0E0E6;
  }
  
`;

const FoodName = styled.ul`
    font-weight: bold;
    max-width: 100%;
    margin-bottom: 0.3em;
    margin-top: 0.5em;
`;

const FoodInfo = styled.ul`
  width:100%;
  max-height:fit-content;
  max-width: 90%;
  margin-left:2em;
  padding: 2px;
`;

interface FoodInterface {
    rankImgSrc: string;
    placeName: string;
    placeAddress: string;
    placeRating: number;
    placeLink: string;
    placeDistance: number;
    school: string;
    menuId: number;
    menuName: string;
    menuPrice: number;
    menuImg: string;
  }  

const API_URL = "http://13.125.233.202/api/rank";
const RankImgUrl = "src/Assets/Img/rank";

interface ModalDefaultType{
    univName: string;
    onClickToggleModal: () => void;
}

function Modal({univName, onClickToggleModal}:PropsWithChildren<ModalDefaultType>){
    const [foods, setFoods] = useState<FoodInterface[]>([]);

    useEffect(() => {
        const getFoods = async () => {
          try {
            const response = await axios.get<FoodInterface[]>(API_URL, {
              params: {
                rankCount: 5,
                school: univName
              }
            });
    
            const fetchedFoods = response.data;
            setFoods(fetchedFoods);
          } catch (error) {
            console.error(error);
          }
        };
    
        getFoods();
      }, []);

    return (
        <ModalContainer>
            <DialogBox>
                {foods.map((f, index) => (
                    <RankBox>
                        <ImageComponent imageUrl={index === 0 ? Rank1 : index === 1 ? Rank2 : index === 2 ? Rank3 : index === 3 ? Rank4 : index === 4 ? Rank5 :''} />
                    <FoodBox>
                    <a href={f.placeLink} style={{ cursor: 'pointer' }}>
                        <ImageComponent imageUrl={`${f.menuImg}`} />
                        <FoodInfo>
                        <FoodName>
                            <span>{f.menuName}</span>
                        </FoodName>
                        <span>{f.menuPrice}원</span>
                        <div align-items="vertical">
                            <span>{f.placeName}</span>
                        </div>
                        <span>{f.placeDistance}m | ★: {f.placeRating}</span>
                        </FoodInfo>
                    </a>
                    </FoodBox>
                    </RankBox>
                ))}
            </DialogBox>
            <Backdrop
                onClick={(e:React.MouseEvent)=>{
                    e.preventDefault();

                    if(onClickToggleModal){
                        onClickToggleModal();
                    }
                }}
            />
        </ModalContainer>
    );
}

export default Modal;