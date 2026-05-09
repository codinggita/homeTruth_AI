/**
 * @project     Home Truth AI
 * @author      Kamlesh Chandela
 * @copyright   © 2026 Kamlesh Chandela. All Rights Reserved.
 * @license     Proprietary — Unauthorized use strictly prohibited.
 * @contact     kamlesh.b.chandela.cg@gmail.com
 *
 * This file is part of Home Truth AI — an original work by Kamlesh Chandela.
 * Copying, modification, redistribution, training AI, or using the 
 * ideas/logic of this work in any project or company is strictly prohibited.
 */


import Container from '../common/Container';
import AnimatedCounter from '../ui/AnimatedCounter';

const StatsBar = () => {
  const stats = [
    { label: 'Homes Analyzed', target: '12,450+', icon: '🏠' },
    { label: 'Risk Score Found', target: '98/100', icon: '🎯' },
    { label: 'Benefits Unlocked', target: '₹4.2 Cr', icon: '💰' },
    { label: 'Service Bookings', target: '8,900+', icon: '🔧' },
  ];

  return (
    <section className="py-12 bg-black/20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedCounter key={i} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsBar;

