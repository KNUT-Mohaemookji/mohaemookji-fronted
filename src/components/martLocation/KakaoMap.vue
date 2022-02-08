<template>
  <div id="map"/>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            logoImg: "https://user-images.githubusercontent.com/76980526/148074503-94784be9-47a4-41cc-9fa5-bf88c79b2b18.jpeg",
            martLocation: [],
            martTitle: '',
            currentLatitude: 0,
            currentLongitude: 0,
        }
    },
    computed: {
        ...mapState('town', ['martData','townList', 'townLocation'])
    },
    // async, await 개념 적용하기. (위치를 찾기 전에 결과를 출력하기 때문에 잠시 멈춤 현상이 발생.
    // 그러므로 위치 찾을 때 까지 정지했다가 위치를 찾아주면 위치를 표시하는 시긍로 하기.)
    // mounted에서 kakaoMap실행 전 currentLocation이 실행이 되면 kakaoMap이 띄워지도록 하기.
    mounted(){
        // kakao에 url 중 동네 정보를 인자에 담아주기.
        this.currentLocation();
        setTimeout(() => {
            this.kakaoMap();
        }, 5000);
    },
    methods: {
        // 현재 자신의 위치를 알려줌.
        async currentLocation(){
            let latitude = 0 
            let longitude = 0;
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(position){
                    alert(position.coords.latitude + ' ' + position.coords.longitude);
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;
                    
                }, function(error){
                    console.log(error);
                }, {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity
                });
            }else{
                alert('GPS를 지원하지 않습니다.');
            }
            setTimeout(() => {
                this.currentLatitude = latitude;
                this.currentLongitude = longitude;
                console.log("현재 위치에서 위도는 " + this.currentLatitude + "경도는 : " + this.currentLongitude);
            }, 4000);
        },
        kakaoMap(){
            // martLocation에 마트 데이터 넣어주기
            this.martLocation = this.martData.towns[this.townLocation]

            var mapContainer = document.getElementById('map');
            var mapOptions = {
                // 현재위치 적용 완료.
                // center: new kakao.maps.LatLng(this.currentLatitude, this.currentLongitude),
                // level: 3
                center: new kakao.maps.LatLng(36.97119012428337, 127.92837941506313),
                level: 7
            };
            // 지도생성
            var map = new kakao.maps.Map(mapContainer, mapOptions);  
            // 마커가 표시될 위치
            let martTitle = [];
            let location1 = [];
            let location2 = [];
            // 여기 아래 코드가 어떻게 연수동이라는 데이터에 접근을 하는지.. 의문 쨋든 동네 마트 별 마커 위치들 불러오기 성공!
            for(var i = 0; i < 10; i++){
                for(var j in this.martLocation){
                    console.log(this.martLocation[j][i].location1);
                    martTitle.push(this.martLocation[j][i].name);
                    location1.push(this.martLocation[j][i].location1);
                    location2.push(this.martLocation[j][i].location2);
                }
            }
            // 마커 이미지 생성
            var imageSrc = this.logoImg,
            imageSize = new kakao.maps.Size(64, 69),
            imageOption = {offset: new kakao.maps.Point(27, 69)};
            
            
            for(var i = 0; i < location1.length; i++){
                let positions = 
                {
                    // title: `<div>${martTitle[i]}</div>`,
                    title: `<div class = "abc" style = "
                    padding: 3px;
                    color: #333;
                    font-weight: 500;
                    font-size: 18px;
                    ">${martTitle[i]}</div>`,
                    latlng: new kakao.maps.LatLng(location1[i], location2[i])
                }

                var imageSize = new kakao.maps.Size(50, 50); 

                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position: positions.latlng, // 마커를 표시할 위치
                    title : positions.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage, // 마커 이미지 
                    clickable: true,
                });
                
                var infoWindow = new kakao.maps.InfoWindow({
                    content: positions.title
                });

                kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infoWindow));
                kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infoWindow));;
            }
            // 인포윈도우를 표시하는 클로저를 만드는 함수.
            function makeOverListener(map, marker, infowindow){
                return function(){
                    infowindow.open(map, marker);
                };
            }
            // 인포윈도우를 닫는 클로저를 만드는 함수.
            function makeOutListener(infowindow){
                return function(){
                    infowindow.close();
                }
            }
        },
    }
}
</script>