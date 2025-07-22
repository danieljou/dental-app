"use client";
import React, { useState } from "react";
import {
  DashboardStats,
  AppointmentManagement,
  PatientManagement,
  ServicesManagement,
  FinancialManagement,
  DashboardNavigation
} from "@/components/dashboard";

const DashboardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tableau de bord</h1>
              <p className="text-gray-600 dark:text-gray-400">{"Vue d'ensemble de votre cabinet dentaire"}</p>
            </div>
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-dark-light rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"></div>
              <div className="bg-white dark:bg-dark-light rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"></div>
            </div>
          </div>
        );
      case "appointments":
        return <AppointmentManagement />;
      case "patients":
        return <PatientManagement />;
      case "services":
        return <ServicesManagement />;
      case "finance":
        return <FinancialManagement />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Section en cours de développement</h2>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      <DashboardNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="ml-64 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default DashboardPage;
