import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import language_icon from '../../images_icons/lang_icon.png';
// import language_icons_vector from '../../images_icons/lang_icons_vector.png';
import './Header.scss';
import './HeaderMedia.scss';
import Burger from './Burger/Burger';




export default function Header() {

    const [burgerBool, setBurgerBool] = useState(false);

    return (
        <header>
            <article className='header_main'>

                <div className='header_main_elements'>

                    <aside className='header_logo'>

                        <Link to="/" className='router_text'>

                            <svg xmlns="http://www.w3.org/2000/svg" width="115" height="59" viewBox="0 0 115 59" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.9219 0.8723C48.9219 0.992252 49.366 1.2242 49.9083 1.38792C50.451 1.55165 50.7709 1.4533 50.6186 1.17019C50.3534 0.675033 48.9219 0.423759 48.9219 0.8723ZM51.3866 1.45273C51.3866 1.6284 52.5514 2.4493 53.9745 3.27703C57.4098 5.27472 61.897 9.43154 65.3747 13.8385C66.9314 15.8112 68.9101 18.2659 69.7722 19.2932L71.3388 21.1607L71.7312 19.8037C72.0511 18.6963 71.78 17.9993 70.2583 16.0158C65.1766 9.39345 61.9941 6.30141 57.5483 3.66645C54.7016 1.97916 51.3866 0.788163 51.3866 1.45273ZM34.2224 2.98141C31.3382 4.29406 31.008 4.93646 33.6703 4.05586C34.5995 3.74831 36.692 3.49988 38.3202 3.50386C45.5931 3.52034 51.7169 7.29912 59.0271 16.2819C61.4721 19.2858 61.5056 19.3046 63.19 18.6116L64.8882 17.9129L60.2324 12.502C56.3465 7.98529 54.8524 6.67776 51.1973 4.5948C47.0043 2.20485 46.6065 2.09229 41.8314 1.94334C37.7114 1.81486 36.3889 1.99508 34.2224 2.98141ZM30.8152 6.31961C28.6655 7.44522 25.2608 10.3064 25.2608 10.9881C25.2608 11.1996 26.501 10.5117 28.0163 9.45939C34.7597 4.77671 42.771 6.90629 50.6408 15.4735C52.995 18.0363 53.8537 18.4922 56.0488 18.3432C56.8474 18.2892 56.6344 17.8288 54.8164 15.6799C51.8356 12.1558 46.4774 8.11832 42.6606 6.52085C38.6495 4.84152 33.7955 4.75909 30.8152 6.31961ZM1.60114 11.5287C1.60015 11.7248 1.93239 12.2035 2.33907 12.5929C2.93158 13.1597 3.07848 14.8726 3.07848 21.2085C3.07848 30.6761 3.566 32.559 6.37181 33.9313C9.03911 35.2349 14.9021 34.887 16.414 33.3344C18.7199 30.9666 19.3228 28.2362 19.3346 20.1078C19.3435 13.9289 19.4796 12.498 20.0849 12.2302C21.5484 11.5821 20.7745 11.1245 18.1131 11.0643C15.506 11.0057 14.5936 11.5452 16.1414 12.2302C16.7516 12.5003 16.8808 13.9943 16.8808 20.7719C16.8808 25.2897 16.7428 29.4004 16.5747 29.9064C15.8407 32.1122 11.4067 33.2156 8.7951 31.8433C6.98601 30.8927 6.52906 28.6051 6.52906 20.499C6.52906 13.7845 6.60744 13.1626 7.55092 12.4002C8.18879 11.8852 8.37462 11.4332 8.04534 11.1984C7.39663 10.7357 1.60311 11.033 1.60114 11.5287ZM39.1804 14.3905C37.7494 16.0408 39.1188 18.6951 41.0393 17.9919C41.8556 17.6935 42.0444 17.2284 41.9256 15.8134C41.7604 13.8482 40.3048 13.0938 39.1804 14.3905ZM111.17 14.7816C110.342 15.0613 110.19 15.3587 110.547 16.0039C111.182 17.1551 111.175 32.8899 110.539 33.3429C109.385 34.1656 110.215 34.7642 112.511 34.7642C114.807 34.7642 115.637 34.1656 114.483 33.3429C114.187 33.132 113.99 29.2629 113.99 23.645C113.99 13.4627 114.095 13.7936 111.17 14.7816ZM29.3877 20.134C28.8104 20.52 27.8827 21.1556 27.3257 21.5461C26.4492 22.1607 26.2708 22.1038 26.0002 21.1198C25.7675 20.2744 25.2544 19.9834 23.9954 19.9834C23.0647 19.9834 22.3031 20.2392 22.3031 20.5518C22.3031 20.8645 22.525 21.1203 22.7961 21.1203C23.0933 21.1203 23.289 23.4779 23.289 27.056C23.289 30.3999 23.0736 33.1451 22.7961 33.3429C21.6416 34.1656 22.4722 34.7642 24.7678 34.7642C27.0634 34.7642 27.8941 34.1656 26.7396 33.3429C25.9095 32.7511 26.1421 25.525 27.0388 24.0486C28.0336 22.4108 29.6819 21.665 30.8063 22.3443C31.5354 22.7849 31.669 23.6996 31.669 28.2464C31.669 31.4544 31.4698 33.6272 31.176 33.6272C30.9049 33.6272 30.6831 33.883 30.6831 34.1957C30.6831 34.5106 31.946 34.7562 33.5175 34.746C35.8994 34.7306 36.2218 34.6141 35.5371 34.0132C34.8894 33.4447 34.6873 32.0411 34.5512 27.1629C34.4038 21.8804 34.2471 20.9145 33.4234 20.221C32.2516 19.2335 30.7797 19.2022 29.3877 20.134ZM63.3443 19.8156C61.794 20.1602 59.3643 23.1254 58.8674 25.2789C58.4139 27.2436 58.8236 29.6239 59.9588 31.6221C61.0763 33.5891 63.7564 34.7642 67.1242 34.7642C70.3618 34.7642 70.3529 34.7727 71.3156 30.7847L71.6587 29.3635L70.7655 30.5761C68.8711 33.1468 66.5228 33.696 64.1981 32.1122C62.7079 31.0968 61.4381 28.592 62.0844 27.9434C62.3008 27.7262 64.4189 26.961 66.7909 26.2436C69.1635 25.5256 71.1042 24.6478 71.1042 24.2925C71.1042 23.0362 69.475 20.9896 67.8513 20.2073C66.2112 19.4171 65.4378 19.35 63.3443 19.8156ZM79.9771 19.8162C79.5704 19.9879 78.7388 20.6519 78.1286 21.292L77.0194 22.4557V21.2193C77.0194 20.1488 76.7454 19.9834 74.9713 19.9834C73.0182 19.9834 72.9611 20.0317 73.7389 21.0231C74.8771 22.4734 74.9412 32.9234 73.8153 33.4214C72.2438 34.1172 73.1942 34.7642 75.7871 34.7642C78.2607 34.7642 79.3984 34.0689 77.8821 33.4845C76.9371 33.1201 77.2368 25.3852 78.2661 23.574C78.9183 22.4256 79.3609 22.2005 80.4641 22.4552C81.5831 22.7133 81.8976 22.5438 82.1199 21.5643C82.567 19.5928 81.865 19.0203 79.9771 19.8162ZM86.0255 19.7901C85.4206 19.9384 84.4742 20.7218 83.9216 21.5319C82.0814 24.23 83.6307 26.7001 88.1032 28.1998C91.049 29.1873 91.5257 29.6909 91.0722 31.3384C90.349 33.9672 85.0544 33.2094 83.6741 30.2799C82.985 28.8177 82.9737 28.8354 82.9544 31.4544L82.9347 34.1138L85.6395 34.5038C89.1364 35.0075 91.4005 34.493 92.658 32.9081C95.1769 29.7336 94.0032 26.8394 89.5983 25.3624C86.3104 24.2601 85.2683 23.0526 86.6214 21.9117C87.7512 20.9589 88.2422 20.935 90.2352 21.7366C91.0781 22.0754 91.9023 22.8429 92.0674 23.4421C92.5875 25.3334 93.0735 24.6234 92.8778 22.2573C92.723 20.3813 92.5051 19.9822 91.6326 19.9771C91.051 19.9737 89.7989 19.8697 88.85 19.7457C87.9011 19.6218 86.6298 19.6417 86.0255 19.7901ZM99.0785 20.1567C96.8406 20.7167 96.737 20.8281 96.737 22.6871V24.6325L98.2834 23.1317C99.5073 21.9435 100.252 21.6667 101.857 21.802C103.606 21.9498 103.904 22.1686 104.027 23.3943C104.155 24.6871 103.888 24.9093 101.069 25.8542C97.2541 27.1327 95.7512 28.625 95.7512 31.1361C95.7512 34.5879 99.7183 35.9563 103.012 33.6403C104.595 32.5266 104.606 32.5266 105.124 33.6425C105.489 34.4276 106.157 34.7642 107.352 34.7642C109.258 34.7642 109.477 34.3873 108.198 33.3094C107.505 32.725 107.287 31.4283 107.089 26.7234C106.856 21.1755 106.777 20.827 105.61 20.1482C104.193 19.3245 102.399 19.3267 99.0785 20.1567ZM38.2473 21.0231C39.4254 22.5239 39.4254 32.2236 38.2473 33.7244C37.466 34.7198 37.5498 34.7642 40.219 34.7642C41.7521 34.7642 43.0066 34.5084 43.0066 34.1957C43.0066 33.883 42.7848 33.6272 42.5137 33.6272C42.2125 33.6272 42.0207 30.974 42.0207 26.8053V19.9834H39.7261C37.5345 19.9834 37.4679 20.03 38.2473 21.0231ZM44.4051 20.4825C45.2514 21.1016 48.9204 32.9706 48.5808 33.9916C48.3895 34.5652 48.8445 34.7642 50.348 34.7642C51.983 34.7642 52.3725 34.5635 52.3725 33.721C52.3725 32.497 56.0444 21.8986 56.8622 20.7622C57.3191 20.1272 57.0953 19.9834 55.6525 19.9834C54.3038 19.9834 53.9479 20.1806 54.1579 20.8122C54.3097 21.2687 53.7059 23.8662 52.8161 26.5853L51.1983 31.5289L49.7968 26.7513C49.0264 24.1231 48.4935 21.5251 48.6128 20.9782C48.7986 20.126 48.4644 19.9845 46.2876 19.9919C44.7063 19.9976 43.9949 20.1829 44.4051 20.4825ZM57.5833 22.0134C56.7266 23.0015 56.5989 23.7462 57.2116 24.1828C57.433 24.3403 57.9999 23.7161 58.4716 22.7951C59.389 21.0038 58.8615 20.5399 57.5833 22.0134ZM66.8476 22.2988C67.5619 22.9463 68.1465 23.6837 68.1465 23.9367C68.1465 24.1896 67.0931 24.6939 65.8051 25.0583C64.517 25.4221 63.0757 25.853 62.601 26.0168C61.2779 26.4716 61.5056 24.1794 62.9485 22.516C64.4243 20.8134 65.1647 20.7719 66.8476 22.2988ZM72.0974 22.6502C72.1019 22.9031 72.3202 23.4938 72.583 23.9628C72.9946 24.6979 73.0616 24.6825 73.0685 23.8542C73.0725 23.3255 72.8541 22.7349 72.583 22.5416C72.3119 22.3483 72.0935 22.3972 72.0974 22.6502ZM64.5974 23.508C65.0573 24.0384 65.3205 24.0384 65.7804 23.508C66.2403 22.9776 66.1092 22.8258 65.1889 22.8258C64.2686 22.8258 64.1375 22.9776 64.5974 23.508ZM69.2556 26.9053C67.3992 27.4858 67.2814 27.9462 68.6291 29.3527C69.5455 30.3095 69.6244 30.3117 69.93 29.3931C70.1089 28.8558 70.6876 28.2311 71.2161 28.0059C72.8911 27.2913 71.149 26.313 69.2556 26.9053ZM104.131 28.2521C104.131 31.6073 100.972 34.3043 99.3003 32.3765C97.9704 30.8427 99.3639 28.1611 102.16 26.8752C104.032 26.0145 104.131 26.0844 104.131 28.2521ZM78.5116 29.3902C78.5042 30.3424 78.8862 31.7381 79.3609 32.4908C80.8856 34.9103 84.626 38.7732 85.7691 39.1092C86.3794 39.2888 86.8782 39.6231 86.8782 39.8528C86.8782 40.2899 89.6865 42.0057 93.04 43.6168C94.2314 44.1892 97.0072 44.6793 100.054 44.8544C104.449 45.1079 105.473 44.9823 108.036 43.8766C110.706 42.7248 114.976 38.7988 114.976 37.4947C114.976 37.244 113.885 37.7408 112.552 38.5992C109.208 40.7527 110.935 40.0367 106.744 41.0438C100.979 42.4298 92.6718 40.8226 87.9943 37.4173C86.861 36.5925 85.0874 35.8966 83.8565 35.7949C81.7862 35.6237 81.6965 35.5396 81.552 33.6272C81.4633 32.4572 80.8087 30.8177 79.9633 29.6477L78.5249 27.658L78.5116 29.3902ZM63.2171 29.0377C63.2171 29.6625 65.6123 31.9217 66.2748 31.9217C66.5277 31.9217 66.261 31.1542 65.6818 30.2162C64.6841 28.6 63.2171 27.8991 63.2171 29.0377ZM72.4129 30.9939C72.2088 31.8904 72.1586 32.7585 72.301 32.9228C72.6978 33.3805 73.1829 31.5499 72.9719 30.3913C72.8334 29.6335 72.6865 29.7921 72.4129 30.9939ZM65.6818 36.398C65.6818 37.0086 70.6038 43.4587 73.0266 46.0226C83.265 56.8587 95.0669 60.9985 104.793 57.1651C106.934 56.3215 110.932 52.6501 110.39 52.0254C110.272 51.8889 108.499 52.4261 106.45 53.2192C99.9796 55.7245 92.5239 54.8297 85.4241 50.6962C81.4298 48.3711 74.9668 42.6293 72.233 38.9773C70.1104 36.1416 69.7644 35.9012 67.8059 35.9012C66.6376 35.9012 65.6818 36.1246 65.6818 36.398ZM76.2953 39.3616C85.7031 50.425 96.704 54.6944 106.168 50.9543C108.587 49.9987 112.147 46.8435 113.083 44.826C113.625 43.6583 113.604 43.648 112.461 44.5042C111.811 44.9914 109.971 45.9516 108.373 46.6377C105.006 48.0834 98.9794 48.3637 95.0117 47.2591C91.0229 46.1488 84.8976 42.4326 81.4786 39.0495C78.5357 36.1371 78.1123 35.9012 75.8255 35.9012H73.3535L76.2953 39.3616ZM0.0434469 40.7334C0.215483 43.2273 1.10672 44.4183 1.10672 42.1546C1.10672 41.523 1.43551 41.0176 1.84613 41.0176C2.25675 41.0176 2.58554 41.523 2.58554 42.1546C2.58554 42.7799 2.80736 43.2916 3.07848 43.2916C3.34959 43.2916 3.57142 42.1404 3.57142 40.7334C3.57142 39.3263 3.34959 38.1751 3.07848 38.1751C2.80736 38.1751 2.58554 38.5589 2.58554 39.0279C2.58554 39.4969 2.2528 39.8806 1.84613 39.8806C1.43945 39.8806 1.10672 39.4969 1.10672 39.0279C1.10672 38.5589 0.827715 38.1751 0.487093 38.1751C0.0547853 38.1751 -0.0792951 38.95 0.0434469 40.7334ZM4.75152 38.9801C4.60413 39.4224 4.55582 40.5099 4.64356 41.3962C4.77173 42.685 5.08129 43.0443 6.18893 43.1904C6.95101 43.291 7.89401 43.0682 8.28392 42.6947C9.14657 41.8692 9.21065 39.7897 8.40223 38.8573C7.58543 37.9153 5.07784 37.9995 4.75152 38.9801ZM9.83816 38.5282C9.12093 39.3553 9.52367 40.4935 10.719 41.0176C12.3418 41.7288 12.3063 42.3803 10.6707 41.9073C9.74204 41.6384 9.44874 41.7385 9.60254 42.2717C9.71986 42.6765 10.4622 43.0073 11.2529 43.0073C13.3065 43.0073 13.5599 40.8238 11.6093 39.9352L10.2261 39.3053L11.63 39.618C12.6425 39.8431 12.9752 39.7254 12.8244 39.195C12.5922 38.3809 10.3917 37.8898 9.83816 38.5282ZM13.4302 40.6993C13.4302 42.6247 13.6205 43.2916 14.1696 43.2916C14.5763 43.2916 14.909 42.9687 14.909 42.5736C14.909 42.179 15.4084 41.6032 16.0181 41.2945C16.6363 40.9818 17.1273 40.2303 17.1273 39.5964C17.1273 38.693 16.7477 38.423 15.2787 38.2832L13.4302 38.1064V40.6993ZM17.8667 40.7334C17.8667 42.1404 18.0885 43.2916 18.3596 43.2916C18.6307 43.2916 18.8526 42.1404 18.8526 40.7334C18.8526 39.3263 18.6307 38.1751 18.3596 38.1751C18.0885 38.1751 17.8667 39.3263 17.8667 40.7334ZM19.3455 38.7436C19.3455 39.0563 19.6782 39.3121 20.0849 39.3121C20.6015 39.3121 20.8243 39.9125 20.8243 41.3019C20.8243 42.3962 21.0461 43.2916 21.3172 43.2916C21.5884 43.2916 21.8102 42.4883 21.8102 41.5065C21.8102 40.4736 22.1735 39.4037 22.6728 38.9665C23.4334 38.3002 23.288 38.2093 21.4405 38.1933C20.288 38.1831 19.3455 38.431 19.3455 38.7436ZM23.8357 39.4543C22.525 43.4945 22.5733 43.7885 24.3459 42.581C25.1809 42.0125 25.4343 42.0125 25.6127 42.581C25.7355 42.9721 26.1737 43.2916 26.5868 43.2916C27.1068 43.2916 27.2306 42.9852 26.9885 42.2967C26.7963 41.7493 26.4177 40.5986 26.1481 39.7385C25.5541 37.8466 24.4031 37.705 23.8357 39.4543ZM27.7255 40.7334C27.7255 43.2859 27.7294 43.2916 29.4798 43.2916C30.5239 43.2916 31.111 43.0614 30.9296 42.7231C30.762 42.4104 30.1946 42.1546 29.6681 42.1546C28.9031 42.1546 28.7113 41.7555 28.7113 40.1649C28.7113 39.0705 28.4895 38.1751 28.2184 38.1751C27.9473 38.1751 27.7255 39.3263 27.7255 40.7334ZM33.1478 40.7334C33.1478 42.1404 33.3696 43.2916 33.6407 43.2916C33.9119 43.2916 34.1337 42.9255 34.1337 42.4786C34.1337 42.0312 34.633 41.5833 35.2428 41.4838C36.0369 41.3536 36.3963 40.8579 36.5077 39.7385C36.6521 38.2917 36.5328 38.1751 34.9056 38.1751C33.1508 38.1751 33.1478 38.1797 33.1478 40.7334ZM37.4842 38.8056C37.1746 39.8772 37.6671 43.2916 38.1309 43.2916C38.3725 43.2916 38.5701 42.9079 38.5701 42.4388C38.5701 41.9698 38.7683 41.5861 39.0103 41.5861C39.2524 41.5861 39.5782 41.9698 39.7345 42.4388C39.8902 42.9079 40.3654 43.2916 40.7903 43.2916C41.3745 43.2916 41.4494 43.0483 41.0979 42.2905C40.8426 41.7402 40.7494 40.589 40.8914 39.7323C41.1334 38.2729 41.0408 38.1751 39.4081 38.1751C38.4504 38.1751 37.5843 38.4588 37.4842 38.8056ZM42.038 39.2752C41.1665 41.1529 42.2061 43.2916 43.991 43.2916C45.8617 43.2916 46.8855 41.2979 45.9978 39.3838C45.2613 37.7971 42.7557 37.7277 42.038 39.2752ZM46.9501 40.7692C46.9501 43.3376 46.9654 43.3621 48.5024 43.1853C50.3701 42.971 51.1549 41.7265 50.7103 39.6845C50.4337 38.4128 50.1118 38.1751 48.666 38.1751C46.9575 38.1751 46.9501 38.1865 46.9501 40.7692ZM51.4817 40.5912C51.6286 42.9403 51.6809 43.0073 53.3583 43.0073C55.0358 43.0073 55.0881 42.9403 55.235 40.5912C55.4109 37.7891 54.4837 37.2531 54.252 40.0228C54.1535 41.2069 53.8321 41.8704 53.3583 41.8704C52.8846 41.8704 52.5632 41.2069 52.4646 40.0228C52.233 37.2531 51.3057 37.7891 51.4817 40.5912ZM56.4358 38.8329C54.9269 40.5731 56.2307 43.5508 58.3454 43.1932C60.0155 42.9101 60.1037 41.6242 58.4435 41.7584C57.3516 41.8465 57.0554 41.6276 57.0554 40.7334C57.0554 39.8391 57.3516 39.6203 58.4435 39.7084C59.3323 39.7806 59.7616 39.5759 59.6379 39.1399C59.3673 38.1899 57.1757 37.9796 56.4358 38.8329ZM60.2595 38.7436C60.2595 39.0563 60.5922 39.3121 60.9989 39.3121C61.5155 39.3121 61.7383 39.9125 61.7383 41.3019C61.7383 42.3962 61.9601 43.2916 62.2313 43.2916C62.5024 43.2916 62.7242 42.4883 62.7242 41.5065C62.7242 40.4736 63.0875 39.4037 63.5868 38.9665C64.3474 38.3002 64.202 38.2093 62.3545 38.1933C61.202 38.1831 60.2595 38.431 60.2595 38.7436ZM7.51494 40.7334C7.51494 41.7754 7.2522 42.1546 6.52906 42.1546C5.80591 42.1546 5.54318 41.7754 5.54318 40.7334C5.54318 39.6913 5.80591 39.3121 6.52906 39.3121C7.2522 39.3121 7.51494 39.6913 7.51494 40.7334ZM15.8949 39.8806C15.8949 40.1933 15.6731 40.4491 15.402 40.4491C15.1309 40.4491 14.909 40.1933 14.909 39.8806C14.909 39.568 15.1309 39.3121 15.402 39.3121C15.6731 39.3121 15.8949 39.568 15.8949 39.8806ZM35.6125 39.8806C35.6125 40.1933 35.2798 40.4491 34.8731 40.4491C34.4664 40.4491 34.1337 40.1933 34.1337 39.8806C34.1337 39.568 34.4664 39.3121 34.8731 39.3121C35.2798 39.3121 35.6125 39.568 35.6125 39.8806ZM39.8025 39.8806C39.6349 40.1933 39.2893 40.4491 39.034 40.4491C38.7787 40.4491 38.5701 40.1933 38.5701 39.8806C38.5701 39.568 38.9162 39.3121 39.3386 39.3121C39.7611 39.3121 39.9701 39.568 39.8025 39.8806ZM44.9784 40.7334C44.9784 41.7754 44.7156 42.1546 43.9925 42.1546C43.2693 42.1546 43.0066 41.7754 43.0066 40.7334C43.0066 39.6913 43.2693 39.3121 43.9925 39.3121C44.7156 39.3121 44.9784 39.6913 44.9784 40.7334ZM49.5474 40.0228C49.8678 41.0813 49.402 42.1546 48.6227 42.1546C48.2189 42.1546 47.936 41.5691 47.936 40.7334C47.936 39.257 49.1536 38.7198 49.5474 40.0228Z" fill="#12724F" />
                            </svg>

                        </Link>
                    </aside>


                    <nav>
                        <aside className='header_nav_main'>
                            <NavLink
                                style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                                to="/"
                                className="router_text"
                            >
                                <p>ԳԼԽԱՎՈՐ</p>
                            </NavLink>

                            <NavLink
                                style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                                to="/about"
                                className="router_text"
                            >
                                <p>ՄԵՐ ՄԱՍԻՆ</p>
                            </NavLink>

                            <NavLink
                                style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                                to="/product"
                                className="router_text"
                            >
                                <p>ԱՐՏԱԴՐԱՆՔ</p>
                            </NavLink>

                            <NavLink
                                style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                                to="/services"
                                className="router_text"
                            >
                                <p>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</p>
                            </NavLink>

                            <NavLink
                                style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                                to="/partners"
                                className="router_text"
                            >
                                <p>ԳՈՐԾԸՆԿԵՐՆԵՐ</p>
                            </NavLink>

                            <NavLink
                                style={({ isActive }) => (isActive ? { color: '#12724F' } : { color: '#000000' })}
                                to="/contact"
                                className="router_text"
                            >
                                <p>ՀԵՏԱԴԱՐՁ ԿԱՊ</p>
                            </NavLink>

                            <div className='language_select_block'>
                                <img src={language_icon} alt="language_icon" width="28px" height="17px" className='language_icon' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1.21094 1L3.80041 4.45263L6.82146 1" stroke="#A99E9E" stroke-width="0.863158" />
                                </svg>
                            </div>
                        </aside>

                    </nav>

                    <div className='burger_div_block'>
                            <div
                                className={burgerBool ? "burger_div_x" : "burger_div"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setBurgerBool(!burgerBool);
                                }}
                            >
                                <div className={burgerBool ? "burger_x_first" : "burger_line"}></div>
                                <div className={burgerBool ? "burger_x_second" : "burger_line"}></div>
                                <div className={burgerBool ? "burger_x_third" : "burger_line"}></div>
                            </div>
                        </div>

                </div>
            </article>

            <Burger
                burgerBool={burgerBool}
                setBurgerBool={setBurgerBool}
            />

        </header>
    )
}