// Сервис для расчета индекса риска инновационных продуктов

export class RiskCalculationService {

  // Веса факторов риска
  static RISK_WEIGHTS = {
    marketRisk: 0.25,      // Рыночный риск
    technicalRisk: 0.20,   // Технический риск
    financialRisk: 0.20,   // Финансовый риск
    competitionRisk: 0.15, // Конкурентный риск
    regulatoryRisk: 0.20,  // Регулятивный риск
  };

  // Категории риска
  static RISK_CATEGORIES = {
    LOW: { min: 0, max: 3, label: 'Низкий риск', color: '#28a745' },
    MEDIUM: { min: 3, max: 6, label: 'Средний риск', color: '#ffc107' },
    HIGH: { min: 6, max: 8, label: 'Высокий риск', color: '#fd7e14' },
    CRITICAL: { min: 8, max: 10, label: 'Критический риск', color: '#dc3545' },
  };

  // Расчет индекса риска
  static calculateRiskIndex(factors) {
    if (!factors || typeof factors !== 'object') {
      throw new Error('Факторы риска должны быть объектом');
    }

    let totalRisk = 0;
    let totalWeight = 0;

    Object.entries(this.RISK_WEIGHTS).forEach(([factor, weight]) => {
      if (Object.prototype.hasOwnProperty.call(factors, factor) && factors[factor] !== undefined) {
        const value = Number(factors[factor]);
        if (value < 0 || value > 10) {
          throw new Error(`Значение ${factor} должно быть от 0 до 10`);
        }
        totalRisk += value * weight;
        totalWeight += weight;
      }
    });

    if (totalWeight === 0) {
      return 0;
    }

    return Math.round((totalRisk / totalWeight) * 100) / 100;
  }

  // Определение категории риска
  static getRiskCategory(riskIndex) {
    for (const [key, category] of Object.entries(this.RISK_CATEGORIES)) {
      if (riskIndex >= category.min && riskIndex < category.max) {
        return { ...category, key };
      }
    }
    return { ...this.RISK_CATEGORIES.CRITICAL, key: 'CRITICAL' };
  }

  // Генерация рекомендаций на основе факторов риска
  static generateRecommendations(factors) {
    const recommendations = [];
    
    Object.entries(factors).forEach(([factor, value]) => {
      if (value >= 7) {
        switch (factor) {
          case 'marketRisk':
            recommendations.push('Проведите дополнительное исследование рынка и целевой аудитории');
            break;
          case 'technicalRisk':
            recommendations.push('Рассмотрите возможность создания MVP для технической валидации');
            break;
          case 'financialRisk':
            recommendations.push('Пересмотрите финансовую модель и поищите дополнительные источники финансирования');
            break;
          case 'competitionRisk':
            recommendations.push('Усильте конкурентные преимущества и уникальное ценностное предложение');
            break;
          case 'regulatoryRisk':
            recommendations.push('Проконсультируйтесь с юристами по регулятивным требованиям');
            break;
        }
      }
    });

    return recommendations;
  }
}

export default RiskCalculationService;