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


import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCounter = ({ target, label, icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass p-6 rounded-xl border border-white/5 bg-white/5 flex flex-col items-center text-center hover:border-amber-500/30 transition-colors"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-mono font-bold text-white mb-1">
        {/* Placeholder for actual count up logic */}
        {target}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;

