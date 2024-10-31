import dbPool from "../../db/database"
import pools from "../../db/database"

export const testConnection = async (pool) => {
    try {
        const [rows] = await dbPool.query('SELECT 1 + 1 AS solution')
        console.log(`${dbName} 테스트 쿼리 결과:`, rows[0].solution);
    } catch (e) {
        console.error('test 쿼리 실행 실패' + e)
    }
};