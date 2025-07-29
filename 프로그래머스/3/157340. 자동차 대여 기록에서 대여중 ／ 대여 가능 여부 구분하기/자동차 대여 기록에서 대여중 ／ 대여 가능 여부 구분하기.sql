-- 코드를 입력하세요
SELECT
    CAR_ID,
    CASE
        WHEN
            (SELECT COUNT(*) FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY B
             WHERE A.CAR_ID = B.CAR_ID 
             AND START_DATE <= DATE('2022-10-16') 
             AND END_DATE >= DATE('2022-10-16')
            ) > 0
        THEN '대여중'
        ELSE '대여 가능'
    END AS AVAILABILITY
FROM
    CAR_RENTAL_COMPANY_RENTAL_HISTORY A
GROUP BY
    CAR_ID
ORDER BY
    CAR_ID DESC