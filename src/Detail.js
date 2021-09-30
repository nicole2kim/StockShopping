import "./Detail.scss";
import HyundaiLogoImage from "./img/HyundaiLogoImage.jpg";
import ShoppingCartImage from "./img/shoppingcartimage.png";
import Moment from "react-moment";
import axios from "axios";

const MomentDateChage = () => {
  const nowTime = Date.now();
  // Sun Aug 23 2020 15:43:49 GMT+0900
  return <Moment format="YYYY-MM-DD HH:mm">{nowTime}</Moment>;
};

function Detail() {
  return (
    <>
      <div className="CompanyIntroduction">
        <img className="CompanyLogoImage" src={HyundaiLogoImage} alt="" />
        <div className="CompanyName">현대자동차(주)</div>
        <div className="CompanyStar">⭐ 3.8</div>
        <div className="CompanyClass">제조/화학</div>
        <div className="CompanyLink">www.hyundai.com</div>
        <div className="CompanyHashTag">#그랜저 #아반떼 #소나타 #제네시스</div>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          axios
            .get("/api/stocks/005380")
            .then((result) => {
              console.log(result.data);
            })
            .catch(() => {});
        }}
      >
        현대차 정보 불러오기
      </button>
      <div className="CompanyReview">
        <div className="CompanyReviewTotal">전체 리뷰 통계 (누적 308명)</div>
        <div className="CompanyReviewStar">3.8 ⭐️⭐️⭐️⭐</div>
        <div className="CompanyReview안정성">
          안정성
          <div className="CompanyReview안정성Line"></div>
          <div className="CompanyReview안정성Circle1"></div>
          <div className="CompanyReview안정성Circle2"></div>
          <div className="CompanyReview안정성Circle3"></div>
          <div className="CompanyReview안정성Circle4"></div>
          <div className="CompanyReview안정성Circle5"></div>
          <div className="CompanyReview안정성Circle6"></div>
        </div>

        <div className="CompanyReview수익성">
          수익성
          <div className="CompanyReview수익성Line"></div>
          <div className="CompanyReview수익성Circle1"></div>
          <div className="CompanyReview수익성Circle2"></div>
          <div className="CompanyReview수익성Circle3"></div>
          <div className="CompanyReview수익성Circle4"></div>
          <div className="CompanyReview수익성Circle5"></div>
          <div className="CompanyReview수익성Circle6"></div>
        </div>

        <div className="CompanyReview배당금">
          배당금
          <div className="CompanyReview배당금Line"></div>
          <div className="CompanyReview배당금Circle1"></div>
          <div className="CompanyReview배당금Circle2"></div>
          <div className="CompanyReview배당금Circle3"></div>
          <div className="CompanyReview배당금Circle4"></div>
          <div className="CompanyReview배당금Circle5"></div>
          <div className="CompanyReview배당금Circle6"></div>
        </div>

        <div className="CompanyReview진입가능성">
          진입 가능성
          <div className="CompanyReview진입가능성Line"></div>
          <div className="CompanyReview진입가능성Circle1"></div>
          <div className="CompanyReview진입가능성Circle2"></div>
          <div className="CompanyReview진입가능성Circle3"></div>
          <div className="CompanyReview진입가능성Circle4"></div>
          <div className="CompanyReview진입가능성Circle5"></div>
          <div className="CompanyReview진입가능성Circle6"></div>
        </div>

        <div className="CompanyReviewLine"></div>

        <div className="LatestReview">
          Latest Review
          <div className="LatestReviewBlank"></div>
          <div className="LatestReviewer">user 꽃사슴</div>
          <div className="LatestReviewText">
            아.. 최고의 기업 배당도 쏠쏠함 빨리 진입하세여
          </div>
        </div>

        <div className="InputReview">
          나도 이 주식의 오너라면? 리뷰를 남겨주세요
          <input className="InputReviewText" />
          <div className="InputReviewCheckBox"></div>
          <div className="InputReviewCheck">✔️</div>
        </div>
      </div>

      <div className="ShoppingBasket">
        <div className="ShoppingBasketText">나의 장바구니에 담기</div>
        <img className="ShoppingCartImage" src={ShoppingCartImage} alt="" />
      </div>

      <div className="StockInfo">
        <hr className="StockBorderLine1" />
        <hr className="StockLine1" />
        <hr className="StockLine2" />
        <hr className="StockLine3" />
        <hr className="StockLine4" />
        <hr className="StockLine5" />
        <hr className="StockLine6" />
        <hr className="StockLine7" />
        <hr className="StockBorderLine2" />
        <div className="StockName">현대자동차</div>
        <div className="StockCode">(KRX, 005380)</div>
        <div className="StockPrice">214,500</div>

        <div className="StockTime">
          <Moment></Moment>
        </div>
      </div>

      <div className="BlankDetail"></div>
    </>
  );
}

export default Detail;
