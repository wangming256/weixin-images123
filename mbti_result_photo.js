// MBTI 16种人格照片展示逻辑
// 使用：import getRandomPhoto from './mbti_result_photo'
// const imgUrl = getRandomPhoto(mbtiType)

export const photos = {
  "ISTJ": [
    "istj_pic1.jpg",
    "istj_pic2.jpg",
    "istj_pic3.jpg"
  ],
  "ISFJ": [
    "isfj_pic1.jpg",
    "isfj_pic2.jpg",
    "isfj_pic3.jpg"
  ],
  "ESTJ": [
    "estj_pic1.jpg",
    "estj_pic2.jpg",
    "estj_pic3.jpg"
  ],
  "ESFJ": [
    "esfj_pic1.jpg",
    "esfj_pic2.jpg",
    "esfj_pic3.jpg"
  ],
  "ISTP": [
    "istp_pic1.jpg",
    "istp_pic2.jpg",
    "istp_pic3.jpg"
  ],
  "ISFP": [
    "isfp_pic1.jpg",
    "isfp_pic2.jpg",
    "isfp_pic3.jpg"
  ],
  "ESTP": [
    "estp_pic1.jpg",
    "estp_pic2.jpg",
    "estp_pic3.jpg"
  ],
  "ESFP": [
    "esfp_pic1.jpg",
    "esfp_pic2.jpg",
    "esfp_pic3.jpg"
  ],
  "ENTJ": [
    "entj_pic1.jpg",
    "entj_pic2.jpg",
    "entj_pic3.jpg"
  ],
  "ENTP": [
    "entp_pic1.jpg",
    "entp_pic2.jpg",
    "entp_pic3.jpg"
  ],
  "ENFJ": [
    "enfj_pic1.jpg",
    "enfj_pic2.jpg",
    "enfj_pic3.jpg"
  ],
  "ENFP": [
    "enfp_pic1.jpg",
    "enfp_pic2.jpg",
    "enfp_pic3.jpg"
  ],
  "INTJ": [
    "intj_pic1.jpg",
    "intj_pic2.jpg",
    "intj_pic3.jpg"
  ],
  "INTP": [
    "intp_pic1.jpg",
    "intp_pic2.jpg",
    "intp_pic3.jpg"
  ],
  "INFJ": [
    "infj_pic1.jpg",
    "infj_pic2.jpg",
    "infj_pic3.jpg"
  ],
  "INFP": [
    "infp_pic1.jpg",
    "infp_pic2.jpg",
    "infp_pic3.jpg"
  ]
};

export const getRandomPhoto = (type) => {
  if (!photos[type]) {
    return "default_pic.jpg"
  }
  const picList = photos[type]
  const index = Math.floor(Math.random() * picList.length)
  return picList[index]
}

export default getRandomPhoto;
