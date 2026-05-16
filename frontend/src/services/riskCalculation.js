// сервіс для розрахунку індексу ризику інноваційних продуктів

export class RiskCalculationService {

  // вага факторів ризику
  static RISK_WEIGHTS = {
    marketRisk: 0.25,      // Ринковий ризик
    technicalRisk: 0.20,   // Технічний ризик
    financialRisk: 0.20,   // Фінансовий ризик
    competitionRisk: 0.15, // Конкурентний ризик
    regulatoryRisk: 0.20,  // Регулятивний ризик
  };

  // категорії ризику
  static RISK_CATEGORIES = {
    LOW: { min: 0, max: 3, label: 'Низький ризик', color: '#28a745' },
    MEDIUM: { min: 3, max: 6, label: 'Середній ризик', color: '#ffc107' },
    HIGH: { min: 6, max: 8, label: 'Високий ризик', color: '#fd7e14' },
    CRITICAL: { min: 8, max: 10, label: 'Критичний ризик', color: '#dc3545' },
  };

  // розрахунок індексу ризику
  static calculateRiskIndex(factors) {
    if (!factors || typeof factors !== 'object') {
      throw new Error('Фактори ризику повинні бути об\'єктом');
    }

    let totalRisk = 0;
    let totalWeight = 0;

    Object.entries(this.RISK_WEIGHTS).forEach(([factor, weight]) => {
      if (Object.prototype.hasOwnProperty.call(factors, factor) && factors[factor] !== undefined) {
        const value = Number(factors[factor]);
        if (value < 0 || value > 10) {
          throw new Error(`Значення ${factor} повинно бути від 0 до 10`);
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

  // визначення категорії ризику
  static getRiskCategory(riskIndex) {
    for (const [key, category] of Object.entries(this.RISK_CATEGORIES)) {
      if (riskIndex >= category.min && riskIndex < category.max) {
        return { ...category, key };
      }
    }
    return { ...this.RISK_CATEGORIES.CRITICAL, key: 'CRITICAL' };
  }

  // генерація рекомендацій на основі факторів ризику
  static generateRecommendations(factors) {
    const recommendations = [];
    
    Object.entries(factors).forEach(([factor, value]) => {
      if (value >= 7) {
        switch (factor) {
          case 'marketRisk':
            recommendations.push('Проведіть додаткове дослідження ринку та цільової аудиторії');
            break;
          case 'technicalRisk':
            recommendations.push('Розгляньте можливість створення MVP для технічної валідації');
            break;
          case 'financialRisk':
            recommendations.push('Перегляньте фінансову модель та пошукайте додаткові джерела фінансування');
            break;
          case 'competitionRisk':
            recommendations.push('Посильте конкурентні переваги та унікальну ціннісну пропозицію');
            break;
          case 'regulatoryRisk':
            recommendations.push('Проконсультуйтесь з юристами щодо регулятивних вимог');
            break;
        }
      }
    });

    return recommendations;
  }
}

export default RiskCalculationService;