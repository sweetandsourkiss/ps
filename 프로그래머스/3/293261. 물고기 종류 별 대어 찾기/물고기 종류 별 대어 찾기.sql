-- 코드를 작성해주세요
SELECT
    A.ID,
    B.FISH_NAME,
    A.LENGTH
FROM
    FISH_INFO A
INNER JOIN
    FISH_NAME_INFO B
ON
    A.FISH_TYPE = B.FISH_TYPE
WHERE
    A.LENGTH = (
        SELECT MAX(LENGTH) FROM FISH_INFO C WHERE C.FISH_TYPE = A.FISH_TYPE
    )
ORDER BY
    ID