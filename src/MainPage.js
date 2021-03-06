import './MainPage.scss';

function MainPage(){
    return (
        <div className="MainPage">
            <div className="MainImage">
                <div className="MainImageText1">WHO WE ARE, AND WHY WE DO</div>
                <div className="MainImageText2">간략한 서비스 설명</div>
            </div>


            <div className="WhatsHot">
                <div className="WhatsHotText">
                    <div className="WhatsHotText1">What's </div>
                    <div className="WhatsHotText2">HOT</div>
                    <div className="WhatsHotText3">실시간 통계를 바탕으로 한 이 시각 가장 핫한 종목</div>
                </div>
            

                <div className="WhatsHotImage1"></div>
                <div className="WhatsHotImage2"></div>
                <div className="WhatsHotImage3"></div>
                <div className="WhatsHotImage4"></div>
            </div>


            <div className="OnSale">
                <div className="OnSaleText">
                    <div className="OnSaleText1">On </div>
                    <div className="OnSaleText2">Sale</div>
                    <div className="OnSaleText3">3일째 하락 중인 종목을 모아놓는 코너입니다</div>
                </div>
            
      
                <div className="OnSaleImage1"></div>
                <div className="OnSaleImage2"></div>
                <div className="OnSaleImage3"></div>
                <div className="OnSaleImage4"></div>
            </div>

            <div className="OnFire">
                <div className="OnFireText">
                    <div className="OnFireText1">On </div>
                    <div className="OnFireText2">Fire</div>
                    <div className="OnFireText3">3일째 상승 중인 종목을 모아놓는 코너입니다</div>
                </div>

                <div className="OnFireImage1"></div>
                <div className="OnFireImage2"></div>
                <div className="OnFireImage3"></div>
                <div className="OnFireImage4"></div>
                
                
            </div>

            <div className="BlankMainPage"></div>

        </div>
    );
}

export default MainPage;