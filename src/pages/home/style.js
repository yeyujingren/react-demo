import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width:625px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color:#000;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 125px;
        display: block;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height:27px;
        font-size: 18px;
        font-weight: 700;
        color: #333;

    }
    .desc{
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-top: 2px;
    background-image: url(${ (props) => props.imageUrl });
    background-size: 100% 100%;
    background-repeat: no-repeat;
`
export const WriterWrapper = styled.div`
    overflow: hidden;
    width: 280px;
`
export const WriterHeader = styled.div`
    width: 280px;
`
export const QRCode = styled.div`
    width: 280px;
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .pic{
        float:left;
        width: 60px;
        height: 60px;
        opacity: 0.85;
    }
`
export const QRCodeDesc = styled.div`
    display: inline-block;
    line-height: 35px;
    margin-left: 7px;
    .downLoadTitle{
        font-size: 15px;
        color: #333;
    }
    .desc{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
        line-height:15px;
    }
`
export const RecommendWriter = styled.div`
    overflow: hidden;
    height: 20px;
    font-size: 14px;
    color: #969696;
    padding-bottom: 20px;
`
export const WriterInfoSwitch = styled.div`
    float: right;
    font-size: 14px;
    color: #969696;
`
export const WriterItem = styled.div`
    overflow: hidden;
    width: 280px;
    margin-top: 15px;
    .pic{
        width: 48px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid #ddd;
        float:left;
    }
`
export const WriterDesc = styled.div`
    padding: 5px;
    width: 200px;
    margin-left: 10px;
    float: left;
    .writeName{
        font-size: 14px;
    }
    .follow{
        font-size: 13px;
        color: #42c02e;
        float: right;
    }
    .desc{
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
    }
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px 0;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 110px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 80px;
    cursor: pointer;
`