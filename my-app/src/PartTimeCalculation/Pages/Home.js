import React, {useEffect, useState} from 'react';

const Home = () => {
		const [currentDate, setCurrentDate] = useState(new Date());
		const [year, setYear] = useState(2024);
		const [month, setMonth] = useState(1); // 월은 0부터 시작

		useEffect(() => {
				// 현재 날짜 표시
				const currentDateElement = document.getElementById("currentDate");
				currentDateElement.innerText = "현재 날짜: " + currentDate.toLocaleString();

				// 달력 생성
				const calendarTable = document.getElementById("calendarTable");
				const firstDay = new Date(year, month, 1);
				const lastDay = new Date(year, month + 1, 0);

				const headerRow = calendarTable.insertRow(0);
				const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

				for (let i = 0; i < 7; i++) {
						const cell = headerRow.insertCell(i);
						cell.innerText = daysOfWeek[i];
				}

				let currentDate2 = new Date(firstDay);
				let currentRow = calendarTable.insertRow();

				// 시작 요일까지 빈 셀 추가
				for (let i = 0; i < firstDay.getDay(); i++) {
						const cell = currentRow.insertCell(i);
						cell.innerText = "";
				}

				// 날짜 채우기
				while (currentDate2.getMonth() === month) {
						if (currentDate2.getDay() === 0) {
								currentRow = calendarTable.insertRow();
						}

						const cell = currentRow.insertCell(currentDate2.getDay());
						cell.innerText = currentDate2.getDate();

						currentDate2.setDate(currentDate2.getDate() + 1);
				}
		}, [currentDate, year, month]);

		return (
				<div>
						<div id="currentDate">현재 날짜</div>
						<table id="calendarTable"></table>
				</div>
		);
};

export default Home;
